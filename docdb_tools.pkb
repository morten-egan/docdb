create or replace package body docdb_tools

as

	procedure prepare_line_for_parse (
		parser 				in out nocopy 		docdb_parse.parse_type
		, line_id			in 					number
	)

	as

	begin

		if line_id > 0 then
			parser.current_data.lines(line_id) := trim(parser.current_data.lines(line_id));
			parser.current_data.lines(line_id) := ltrim(parser.current_data.lines(line_id), chr(9));
			parser.current_data.lines(line_id) := rtrim(parser.current_data.lines(line_id), chr(9));
			-- Replace all tabs to spaces, since tabs are not translated in html
			parser.current_data.lines(line_id) := replace(parser.current_data.lines(line_id), chr(9), ' ');
		end if;

	end prepare_line_for_parse;

	function get_metadata_clob (
		obj_type 			in 					varchar2
		, obj_name 			in 					varchar2
		, obj_schema 		in 					varchar2
	)
	return clob

	as

	begin

		return dbms_metadata.get_ddl(
						object_type => obj_type
						, name => obj_name
						, schema => obj_schema
					);

	end get_metadata_clob;

	procedure parse_documentation_line (
		parser 				in out nocopy 		docdb_parse.parse_type
		, line_to_parse		in					number
	)

	as

		param_loc1			number;
		param_loc2			number;

	begin

		if instr(parser.current_data.lines(line_to_parse), 'project') > 0 then
			parser.current_data.project := substr(parser.current_data.lines(line_to_parse), instr(parser.current_data.lines(line_to_parse), '@project') + 9);
		elsif instr(parser.current_data.lines(line_to_parse), 'author') > 0 then
			parser.current_data.author := substr(parser.current_data.lines(line_to_parse), instr(parser.current_data.lines(line_to_parse), '@author') + 8);
		elsif instr(parser.current_data.lines(line_to_parse), 'version') > 0 then
			parser.current_data.version := substr(parser.current_data.lines(line_to_parse), instr(parser.current_data.lines(line_to_parse), '@version') + 9);
		elsif instr(parser.current_data.lines(line_to_parse), 'return') > 0 then
			parser.current_data.returns := substr(parser.current_data.lines(line_to_parse), instr(parser.current_data.lines(line_to_parse), '@return') + 8);
		elsif instr(parser.current_data.lines(line_to_parse), 'throws') > 0 then
			parser.current_data.throws := substr(parser.current_data.lines(line_to_parse), instr(parser.current_data.lines(line_to_parse), '@throws') + 8);
		elsif instr(parser.current_data.lines(line_to_parse), 'exception') > 0 then
			parser.current_data.throws := substr(parser.current_data.lines(line_to_parse), instr(parser.current_data.lines(line_to_parse), '@throws') + 8);
		elsif instr(parser.current_data.lines(line_to_parse), 'param') > 0 then
			param_loc1 := instr(parser.current_data.lines(line_to_parse), '@param') + 7;
			param_loc2 := instr(parser.current_data.lines(line_to_parse), ' ', param_loc1);
			parser.current_data.params(parser.current_data.params.count + 1).parameter_name := substr(parser.current_data.lines(line_to_parse), param_loc1, param_loc2 - param_loc1);
			parser.current_data.params(parser.current_data.params.count).parameter_description := substr(parser.current_data.lines(line_to_parse), param_loc2 + 1);
		end if;

	end parse_documentation_line;

	procedure extract_package_program_name (
		parser 				in out nocopy 		docdb_parse.parse_type
		, start_from_line	in					number
	)

	as

		program_name_loc1	number;
		program_name_loc2	number;
		line_reset			number := start_from_line;

	begin

		if start_from_line <= 0 then
			line_reset := 1;
		end if;

		for i in line_reset..parser.current_data.lines.count loop
			docdb_tools.prepare_line_for_parse(parser, i);
			if substr(parser.current_data.lines(i), 1, 3) = '/**' then
				parser.info.documentation_pkg_block := true;
				exit;
			elsif upper(substr(parser.current_data.lines(i), 1, 9)) = 'PROCEDURE' then
				parser.current_data.is_procedure := true;
				parser.current_data.is_function := false;
				program_name_loc1 := instr(upper(parser.current_data.lines(i)), 'PROCEDURE') + length('PROCEDURE') + 1;
				program_name_loc2 := instr(parser.current_data.lines(i), ' ', program_name_loc1);

				if program_name_loc2 > 0 then
					parser.current_data.program_name := substr(parser.current_data.lines(i), program_name_loc1, program_name_loc2 - program_name_loc1);
				else
					program_name_loc2 := instr(parser.current_data.lines(i), '(', program_name_loc1);
					parser.current_data.program_name := substr(parser.current_data.lines(i), program_name_loc1, program_name_loc2 - program_name_loc1);
				end if;
				exit;
			elsif upper(substr(parser.current_data.lines(i), 1, 8)) = 'FUNCTION' then
				parser.current_data.is_function := true;
				parser.current_data.is_procedure := false;
				program_name_loc1 := instr(upper(parser.current_data.lines(i)), 'FUNCTION') + length('FUNCTION') + 1;
				program_name_loc2 := instr(parser.current_data.lines(i), ' ', program_name_loc1);

				if program_name_loc2 > 0 then
					parser.current_data.program_name := substr(parser.current_data.lines(i), program_name_loc1, program_name_loc2 - program_name_loc1);
				else
					parser.current_data.program_name := replace(substr(parser.current_data.lines(i), program_name_loc1), '(');
				end if;
				exit;
			end if;
		end loop;

	end extract_package_program_name;

	function parse_program_dictionary_ref (
		pkg_owner 			in 					varchar2
		, program_name 		in 					varchar2
		, package_name 		in 					varchar2
	)
	return sys_refcursor

	as

		param_cursor		sys_refcursor;

	begin

		if package_name is null then
			open param_cursor for
				select
					argument_name
					, position
					, sequence
					, (case data_type
						when 'TABLE' then type_owner || '.' || type_name
						when 'PL/SQL RECORD' then type_owner || '.' || type_name || '.' || type_subname
						when 'PL/SQL TABLE' then type_owner || '.' || type_name || '.' || type_subname
						when 'PL/SQL BOOLEAN' then 'BOOLEAN'
						else data_type
					  end) data_type
					, default_value
					, default_length
					, radix
					, in_out
					, data_length
					, data_precision
					, type_owner
					, type_name
					, type_subname
					, type_link
				from
					all_arguments
				where
					owner = pkg_owner
				and
					object_name = upper(program_name)
				and
					package_name is null
				and 
					data_level = 0
				order by position asc;
		else
			open param_cursor for
				select
					argument_name
					, position
					, sequence
					, (case data_type
						when 'TABLE' then type_owner || '.' || type_name
						when 'PL/SQL RECORD' then type_owner || '.' || type_name || '.' || type_subname
						when 'PL/SQL TABLE' then type_owner || '.' || type_name || '.' || type_subname
						when 'PL/SQL BOOLEAN' then 'BOOLEAN'
						else data_type
					  end) data_type
					, default_value
					, default_length
					, radix
					, in_out
					, data_length
					, data_precision
					, type_owner
					, type_name
					, type_subname
					, type_link
				from
					all_arguments
				where
					owner = pkg_owner
				and
					object_name = upper(program_name)
				and
					package_name = upper(package_name)
				and 
					data_level = 0
				order by position asc;
		end if;

		return param_cursor;

	end parse_program_dictionary_ref;

	procedure find_program_boundary (
		parser 				in out nocopy 		docdb_parse.parse_type
	)

	as

		cursor get_source is
			select 
				line
				, text
			from 
				all_source
			where
				owner = parser.current_data.owner
			and
				name = upper(parser.current_data.package_name)
			and 
				type = 'PACKAGE BODY'
			order by 
				line asc;

		in_start			boolean := false;
		token_depth			number := 0;

	begin

		if parser.current_data.package_name is null then
			parser.info.program_boundary_start := 1;
			parser.info.program_boundary_end := -1;
		else
			for lines in get_source loop
				if in_start then
					-- Search for tokens needing an end, and if found up the token_depth
					if instr(lines.text, '--') = 0 then
						if instr(upper(lines.text), 'IF') > 0 then
							token_depth := token_depth + 1;
						end if;
	
						if instr(upper(lines.text), 'FOR ') > 0 and instr(upper(lines.text), ' LOOP') > 0 then
							token_depth := token_depth + 1;
						end if;
	
						if instr(upper(lines.text), 'WHILE ') > 0 and instr(upper(lines.text), ' LOOP') > 0 then
							token_depth := token_depth + 1;
						end if;
	
						-- Search for end token, and if found decrement the token_depth
						if instr(upper(lines.text), 'END IF') > 0 then
							token_depth := token_depth - 1;
						end if;
	
						if instr(upper(lines.text), 'END LOOP') > 0 then
							token_depth := token_depth - 1;
						end if;
	
						if instr(upper(lines.text), 'END;') > 0 or (instr(upper(lines.text), 'END') > 0 and instr(upper(lines.text), upper(parser.current_data.progr.program_name)) > 0)then
							token_depth := token_depth - 1;
						end if;
					end if;
	
					-- Break when token_depth reaches zero
					if token_depth = 0 then
						-- We are at the end of the line, mark it and break the loop
						parser.info.program_boundary_end := lines.line;
						exit;
					end if;
				else
					if (instr(upper(lines.text), 'PROCEDURE ' || upper(parser.current_data.progr.program_name)) > 0) or (instr(upper(lines.text), 'FUNCTION ' || upper(parser.current_data.progr.program_name)) > 0) then
						parser.info.program_boundary_start := lines.line;
						token_depth := 1;
						in_start := true;
					end if;
				end if;
			end loop;
		end if;

	end find_program_boundary;

	function get_program_source_ref (
		parser 				in out nocopy 		docdb_parse.parse_type
	)
	return sys_refcursor

	as

		source_cursor		sys_refcursor;

	begin

		if parser.current_data.package_name is null and parser.current_data.progr.is_function then
			open source_cursor for
				select
					text
				from
					all_source
				where
					owner = upper(parser.current_data.owner)
				and
					name = upper(parser.current_data.program_name)
				and 
					type = 'FUNCTION';
		elsif parser.current_data.package_name is null and parser.current_data.progr.is_procedure then
			open source_cursor for
				select
					text
				from
					all_source
				where
					owner = upper(parser.current_data.owner)
				and
					name = upper(parser.current_data.program_name)
				and 
					type = 'PROCEDURE';
		elsif parser.current_data.package_name is not null then
			open source_cursor for
				select
					text
				from
					all_source
				where
					owner = upper(parser.current_data.owner)
				and
					name = upper(parser.current_data.package_name)
				and 
					type = 'PACKAGE BODY'
				and
					line between parser.info.program_boundary_start and parser.info.program_boundary_end;
		end if;

		return source_cursor;

	end get_program_source_ref;

	function get_dependents_ref (
		parser 				in out nocopy 		docdb_parse.parse_type
	)
	return sys_refcursor

	as

		dependents_cursor 	sys_refcursor;

	begin

		if parser.current_data.package_name is not null then
			open dependents_cursor for 
				select
					*
				from
					all_dependencies
				where
					owner = parser.current_data.owner
				and
					name = parser.current_data.package_name
				and
					type = 'PACKAGE BODY'
				and
					referenced_owner = owner
				and
					referenced_type != 'NON-EXISTENT'
				order by
					referenced_type
					, referenced_owner;
		else
			if parser.current_data.is_function then
				open dependents_cursor for 
					select
						*
					from
						all_dependencies
					where
						owner = parser.current_data.owner
					and
						name = parser.current_data.program_name
					and
						type = 'FUNCTION'
					and
						referenced_owner = owner
					and
						referenced_type != 'NON-EXISTENT'
					order by
						referenced_type
						, referenced_owner;
			else
				open dependents_cursor for 
					select
						*
					from
						all_dependencies
					where
						owner = parser.current_data.owner
					and
						name = parser.current_data.program_name
					and
						type = 'PROCEDURE'
					and
						referenced_owner = owner
					and
						referenced_type != 'NON-EXISTENT'
					order by
						referenced_type
						, referenced_owner;
			end if;
		end if;

		return dependents_cursor;

	end get_dependents_ref;

	procedure parse_program_attributes (
		parser 				in out nocopy 		docdb_parse.parse_type
	)

	as

		source_cursor		sys_refcursor;
		source_line			all_source.text%type;

		fixed_line			varchar2(4000);
		in_comment			boolean := false;
		in_exception		boolean := false;

		-- Negative attributes
		no_instrumentation	boolean := true;

	begin

		find_program_boundary(parser);

		-- Here we can set lines of code count
		if parser.current_data.package_name is null then
			parser.current_data.progr.line_type_counts.lines_of_code := parser.current_data.lines.count;
		else
			parser.current_data.progr.line_type_counts.lines_of_code := parser.info.program_boundary_end - parser.info.program_boundary_start;
		end if;

		source_cursor := get_program_source_ref(parser);
		loop
			fetch source_cursor
			into source_line;

			exit when source_cursor%notfound;
			-- Start the analyze
			fixed_line := trim(source_line);
			fixed_line := ltrim(fixed_line, chr(9));
			fixed_line := upper(fixed_line);
			if substr(fixed_line, 1, 2) = '/*' then
				in_comment := true;
				parser.current_data.progr.line_type_counts.comment_lines := parser.current_data.progr.line_type_counts.comment_lines + 1;
			elsif in_comment then
				parser.current_data.progr.line_type_counts.comment_lines := parser.current_data.progr.line_type_counts.comment_lines + 1;
				if substr(fixed_line, -1, 2) = '*/' then
					in_comment := false;
				end if;
			elsif substr(fixed_line, 1, 2) = '--' then
				--ignore single line comments, but remember to count
				parser.current_data.progr.line_type_counts.comment_lines := parser.current_data.progr.line_type_counts.comment_lines + 1;
			else
				-- Check line for atributes
				if instr(fixed_line, 'INSERT ') > 0 then
					parser.current_data.progr.attributes('Insert') := true;
					parser.current_data.progr.line_type_counts.dml_lines := parser.current_data.progr.line_type_counts.dml_lines + 1;
				end if;
				if instr(fixed_line, 'UPDATE ') > 0 then
					parser.current_data.progr.attributes('Update') := true;
					parser.current_data.progr.line_type_counts.dml_lines := parser.current_data.progr.line_type_counts.dml_lines + 1;
				end if;
				if instr(fixed_line, 'DELETE ') > 0 then
					parser.current_data.progr.attributes('Delete') := true;
					parser.current_data.progr.line_type_counts.dml_lines := parser.current_data.progr.line_type_counts.dml_lines + 1;
				end if;
				if instr(fixed_line, 'EXECUTE IMMEDIATE') > 0 then
					parser.current_data.progr.attributes('Dynamic SQL') := true;
				end if;
				if instr(fixed_line, 'COMMIT;') > 0 then
					parser.current_data.progr.attributes('Commit') := true;
					parser.current_data.progr.line_type_counts.transaction_lines := parser.current_data.progr.line_type_counts.dml_lines + 1;
				end if;
				if instr(fixed_line, 'ROLLBACK;') > 0 then
					parser.current_data.progr.attributes('Rollback') := true;
					parser.current_data.progr.line_type_counts.transaction_lines := parser.current_data.progr.line_type_counts.dml_lines + 1;
				end if;
				if instr(fixed_line, 'DBMS_APPLICATION_INFO.SET;') > 0 then
					no_instrumentation := false;
				end if;
			end if;
		end loop;

		if no_instrumentation then
			parser.current_data.progr.attributes('No Instrumentation') := true;
		else
			parser.current_data.progr.attributes('Code instrumented') := true;
		end if;

	end parse_program_attributes;

	procedure parse_program_dictionary (
		parser 				in out nocopy		docdb_parse.parse_type
	)

	as

		c_cursor			sys_refcursor;
		c_argument_name		all_arguments.argument_name%type;
		c_position			all_arguments.position%type;
		c_sequence			all_arguments.sequence%type;
		c_data_type			varchar2(200);
		c_default_value		all_arguments.default_value%type;
		c_default_length	all_arguments.default_length%type;
		c_radix				all_arguments.radix%type;
		c_in_out			all_arguments.in_out%type;
		c_data_length		all_arguments.data_length%type;
		c_data_precision	all_arguments.data_precision%type;
		c_type_owner		all_arguments.type_owner%type;
		c_type_name 		all_arguments.type_name%type;
		c_type_subname		all_arguments.type_subname%type;
		c_type_link			all_arguments.type_link%type;
		c_dep_cursor 		sys_refcursor;
		c_dep_cursor_typ	all_arguments%rowtype;

	begin

		-- Increment program counter
		parser.counters.program_counter := parser.counters.program_counter + 1;

		-- Set common parts
		parser.current_data.progr.program_name := parser.current_data.program_name;
		parser.current_data.progr.is_function := parser.current_data.is_function;
		parser.current_data.progr.is_procedure := parser.current_data.is_procedure;
		parser.current_data.progr.description := parser.current_data.description;
		parser.current_data.progr.author := parser.current_data.author;
		parser.current_data.progr.throws := parser.current_data.throws;
		parser.current_data.progr.return_description := parser.current_data.returns;

		-- Open and loop over parameter cursor
		c_cursor := parse_program_dictionary_ref(parser.current_data.owner, parser.current_data.program_name, parser.current_data.package_name);
		loop
			fetch c_cursor
			into c_argument_name, c_position, c_sequence, c_data_type, c_default_value, c_default_length, c_radix, c_in_out, c_data_length, c_data_precision, c_type_owner, c_type_name, c_type_subname, c_type_link;
			
			exit when c_cursor%notfound;
			-- Increment parameter counter
			if c_position = 0 and parser.current_data.progr.is_function then
				parser.current_data.progr.return_type := c_data_type;
			else
				if c_argument_name is not null then
					parser.counters.parameter_counter := parser.counters.parameter_counter + 1;
					parser.current_data.progr.parameters(parser.counters.parameter_counter).parameter_name := c_argument_name;
					parser.current_data.progr.parameters(parser.counters.parameter_counter).parameter_position := c_position;
					parser.current_data.progr.parameters(parser.counters.parameter_counter).parameter_type := c_data_type;
					if c_in_out = 'IN/OUT' then
						parser.current_data.progr.parameters(parser.counters.parameter_counter).parameter_out := true;
						parser.current_data.progr.parameters(parser.counters.parameter_counter).parameter_in := true;
					elsif c_in_out = 'IN' then
						parser.current_data.progr.parameters(parser.counters.parameter_counter).parameter_in := true;
						parser.current_data.progr.parameters(parser.counters.parameter_counter).parameter_out := false;
					elsif c_in_out = 'OUT' then
						parser.current_data.progr.parameters(parser.counters.parameter_counter).parameter_out := true;
						parser.current_data.progr.parameters(parser.counters.parameter_counter).parameter_in := false;
					end if;
					-- Default value defined here.
					if c_default_value is not null then
						parser.current_data.progr.parameters(parser.counters.parameter_counter).parameter_default_value := c_default_value;
					end if;
					-- In here we need to check if we already have a description of the parameter and if we do loop and grab description
					if parser.current_data.params.count > 0 then
						for docced_parms in 1..parser.current_data.params.count loop
							if upper(c_argument_name) = upper(parser.current_data.params(docced_parms).parameter_name) then
								parser.current_data.progr.parameters(parser.counters.parameter_counter).parameter_description := parser.current_data.params(docced_parms).parameter_description;
							end if;
						end loop;
					end if;
				end if;
			end if;
		end loop;

		-- Analyze body for attributes
		parse_program_attributes(parser);

		-- Get local dependencies
		c_dep_cursor := get_dependents_ref(parser);
		loop
			fetch c_dep_cursor
			into c_dep_cursor_typ;

			exit when c_dep_cursor%notfound;

			parser.counters.dependents_counter := parser.counters.dependents_counter + 1;
			parser.current_data.dependents(parser.counters.dependents_counter).d_owner := c_dep_cursor_typ.referenced_owner;
			parser.current_data.dependents(parser.counters.dependents_counter).d_name := c_dep_cursor_typ.referenced_name;
			parser.current_data.dependents(parser.counters.dependents_counter).d_type := c_dep_cursor_typ.referenced_type;
		end loop;

	end parse_program_dictionary;

	procedure reset_current_parse (
        parser                                      in out nocopy              docdb_parse.parse_type
    )
 
    as
 
    begin
 
        if parser.current_data.package_name is not null then
            parser.current_data.program_name := null;
        end if;
        parser.current_data.is_function := null;
        parser.current_data.is_procedure := null;
        parser.current_data.description := null;
        parser.current_data.author := null;
        parser.current_data.version := null;
        parser.current_data.returns := null;
        parser.current_data.throws := null;
        parser.current_data.project := null;
        parser.current_data.params.delete;
        parser.current_data.dependents.delete;
        parser.current_data.progr.program_name := null;
        parser.current_data.progr.is_procedure := null;
        parser.current_data.progr.is_function := null;
        parser.current_data.progr.description := null;
        parser.current_data.progr.author := null;
        parser.current_data.progr.return_description := null;
        parser.current_data.progr.return_type := null;
        parser.current_data.progr.throws := null;
        parser.current_data.progr.parameters.delete;
        parser.current_data.progr.attributes.delete;
        parser.current_data.progr.line_type_counts.lines_of_code := 0;
        parser.current_data.progr.line_type_counts.comment_lines := 0;
        parser.current_data.progr.line_type_counts.dml_lines := 0;
        parser.info.documentation_pkg_block := false;
        parser.info.program_spec_met := false;
        parser.info.documentation_block_start := null;
		parser.info.documentation_block_end := null;
		parser.info.program_boundary_start := null;
		parser.info.program_boundary_end := null;
 
    end reset_current_parse;
 
    procedure display_current_parse (
        parser                                      in out nocopy              docdb_parse.parse_type
    )
 
    as
 
    begin
 
        if parser.current_data.is_function then
                    dbms_output.put_line('is_function: True');
        else     
                    dbms_output.put_line('is_function: False');
        end if;
        if parser.current_data.is_procedure then
                    dbms_output.put_line('is_procedure: True');
        else     
                    dbms_output.put_line('is_procedure: False');
        end if;
        
        dbms_output.put_line('description: ' || parser.current_data.description);
        dbms_output.put_line('author: ' || parser.current_data.author);
        dbms_output.put_line('version: ' || parser.current_data.version);
        dbms_output.put_line('returns: ' || parser.current_data.returns);
        dbms_output.put_line('throws: ' || parser.current_data.throws);
        dbms_output.put_line('project: ' || parser.current_data.project);
 
    end display_current_parse;

    procedure parse_current_as_package_doc (
    	parser 				in out nocopy		docdb_parse.parse_type
    )

    as

    begin

    	parser.packages(parser.counters.package_counter).package_name := parser.current_data.package_name;
    	parser.packages(parser.counters.package_counter).package_owner := parser.current_data.owner;
    	parser.packages(parser.counters.package_counter).description := parser.current_data.description;
    	parser.packages(parser.counters.package_counter).project := parser.current_data.project;
    	parser.packages(parser.counters.package_counter).author := parser.current_data.author;
    	parser.packages(parser.counters.package_counter).version := parser.current_data.version;

    end parse_current_as_package_doc;

    procedure parse_current_as_program_doc (
    	parser 				in out nocopy		docdb_parse.parse_type
    )

    as

    begin

    	parser.counters.program_counter := parser.counters.program_counter + 1;
    	if parser.current_data.package_name is null then
    		-- Standalone program, put it into standalones
    		parser.standalones(parser.counters.program_counter) := parser.current_data.progr;
    	else
    		parser.packages(parser.counters.package_counter).programs(parser.counters.program_counter) := parser.current_data.progr;
    	end if;

    end parse_current_as_program_doc;

    function check_if_schema_already_there (
    	parser 				in out nocopy 		docdb_parse.parse_type
    	, schema_name		in 					varchar2
    )
    return boolean

    as

    begin

    	for i in 1..parser.info.schema_list.count loop
    		if upper(parser.info.schema_list(i)) = upper(schema_name) then
    			return true;
    		end if;
    	end loop;

    	return false;

    end check_if_schema_already_there;

    function check_if_pkg_already_loaded (
    	parser 				in out nocopy		docdb_parse.parse_type
    	, schema_name 		in 					varchar2
    	, package_name 		in 					varchar2
    )
    return boolean

    as

    begin

    	if not check_if_schema_already_there(parser, schema_name) then
    		-- Schema is not loaded, therefore package is not loaded either
    		return false;
    	else
    		-- We need to check the package list
    		for i in 1..parser.info.package_list.count loop
    			if parser.info.package_list(i) = upper(schema_name) || '.' || upper(package_name) then
    				return true;
    			end if;
    		end loop;
    	end if;

    	return false;

    end check_if_pkg_already_loaded;

end docdb_tools;
/