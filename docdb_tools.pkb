create or replace package body docdb_tools

as

	procedure prepare_line_for_parse (
		parser 				in out nocopy 		docdb_parse.parse_type
		, line_id			in 					number
	)

	as

	begin

		parser.current_data.lines(line_id) := trim(parser.current_data.lines(line_id));
		parser.current_data.lines(line_id) := ltrim(parser.current_data.lines(line_id), chr(9));
		parser.current_data.lines(line_id) := rtrim(parser.current_data.lines(line_id), chr(9));
		-- Replace all tabs to spaces, since tabs are not translated in html
		parser.current_data.lines(line_id) := replace(parser.current_data.lines(line_id), chr(9));

	end prepare_line_for_parse;

	procedure write_piece (
		piece 				in					clob
		, write_type		in					varchar2 default 'DIRECTORY'
		, type_val			in					varchar2 default 'DOCDB_OUT'
	)

	as

	begin

		null;

	end write_piece;

	procedure add_string_to_list (
		str 				in					clob
		, list 				in out nocopy		clob
		, enclose_elem		in 					varchar2		default '{}'
		, seperate_by		in 					varchar2 		default ','
	)

	as

	begin

		null;

	end add_string_to_list;

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
		, only_package_doc	out 				boolean
	)

	as

		program_name_loc1	number;
		program_name_loc2	number;

	begin

		for i in start_from_line..parser.current_data.lines.count loop
			if substr(parser.current_data.lines(i), 1, 3) = '/**' then
				only_package_doc := true;
				exit;
			elsif upper(substr(parser.current_data.lines(i), 1, 9)) = 'PROCEDURE' then
				parser.current_data.is_procedure := true;
				parser.current_data.is_function := false;
				program_name_loc1 := instr(upper(parser.current_data.lines(i)), 'PROCEDURE') + length('PROCEDURE') + 1;
				program_name_loc2 := instr(parser.current_data.lines(i), ' ', program_name_loc1);

				if program_name_loc2 > 0 then
					parser.current_data.program_name := substr(parser.current_data.lines(i), program_name_loc1, program_name_loc2 - program_name_loc1);
				else
					parser.current_data.program_name := replace(substr(parser.current_data.lines(i), program_name_loc1), '(');
				end if;
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
			end if;
		end loop;

	end extract_package_program_name;

	procedure parse_program_dictionary (
		parser 				in out nocopy		docdb_parse.parse_type
	)

	as

		cursor get_package_program_parms(pkg_owner varchar2, program_name varchar2, package_name varchar2) is
			select
				argument_name
				, position
				, sequence
				, (case data_type
					when 'TABLE' then type_owner || '.' || type_name
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
			order by position;

		cursor get_program_parms(pkg_owner varchar2, program_name varchar2) is
			select
				argument_name
				, position
				, sequence
				, (case data_type
					when 'TABLE' then type_owner || '.' || type_name
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
			order by position;

	begin

		if parser.current_data.package_name is null then
			-- Standalone program
			for parms in get_program_parms(parser.current_data.owner, parser.current_data.program_name) loop
				null;
			end loop;
		else
			-- Package program, use other cursor
			for parms in get_package_program_parms(parser.current_data.owner, parser.current_data.program_name, parser.current_data.package_name) loop
				null;
			end loop;
		end if;

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
        parser.current_data.progr.program_name := null;
        parser.current_data.progr.is_procedure := null;
        parser.current_data.progr.is_function := null;
        parser.current_data.progr.description := null;
        parser.current_data.progr.author := null;
        parser.current_data.progr.return_description := null;
        parser.current_data.progr.throws := null;
        parser.current_data.progr.parameters.delete;
        parser.current_data.progr.attributes.delete;
 
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

end docdb_tools;
/