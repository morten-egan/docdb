create or replace package body docdb

as

	-- TODO LIST
	-- Global program counter for fixtures write to avoid duplicates
	-- Global parameter counter for fixtures write to avoid duplicates
	-- Fix substr of 0 parameters, so parm_ids does not become "]" only
	-- Find global variables for packages and add to model and record

	out_default 					varchar2(50) := 'DIRECTORY';
	out_default_val					varchar2(250) := 'DOCDB_OUT';

	type meta_lines is table of varchar2(4000) index by pls_integer;
	meta_current			meta_lines;
	program_counter			number := 1;
	parameter_counter		number := 1;
	attribute_counter		number := 1;


	/* Documentation records */
	type param_rec is record (
		paramName		varchar2(200)
		, paramType		varchar2(200)
		, description 	varchar2(4000)
		, defaultValue	varchar2(4000)
	);
	type param_list is table of param_rec index by pls_integer;

	type attr_list is table of boolean index by varchar2(250);

	type program_rec is record (
		programName		varchar2(200)
		, programType	varchar2(200)
		, description 	clob
		, author 		varchar2(200)
		, throws		varchar2(4000)
		, returnType	varchar2(200)
		, returnDesc	varchar2(4000)
		, params 		param_list
		, attrs 		attr_list
	);

	type program_list is table of program_rec index by pls_integer;

	type document_rec is record (
		packageName		varchar2(200)
		, description	clob
		, project		varchar2(4000)
		, author		varchar2(4000)
		, version		varchar2(4000)
		, programs 		program_list
	);

	type doc_list is table of document_rec index by pls_integer;

	type run_rec is record (
		run_id				number
		, run_type			varchar2(200)
		, run_name			varchar2(250)
		, run_date			date
		, run_description	clob
		, run_pkg_list		doc_list
	);	

	procedure meta_clob_to_lines (
		meta_clob 			in 			clob
	)

	as

		var_clob_line varchar2(4000);
		var_clob_line_count number;

	begin

		meta_current.delete;

		var_clob_line_count := length(meta_clob) - nvl(length(replace(meta_clob,chr(10))),0) + 1;
 		for i in 1.. var_clob_line_count loop
			var_clob_line := regexp_substr(meta_clob,'^.*$',1,i,'m');
			meta_current(i) := var_clob_line;
		end loop;

		exception
			when others then
				raise;

	end meta_clob_to_lines;

	procedure get_program_boundary (
		pkg_in				in 				varchar2
		, prc_in	 		in 				varchar2
		, owner_in			in 				varchar2
		, boundary_start	out 			number
		, boundary_end 		out 			number
	)

	as

		cursor get_source is
			select 
				line
				, text
			from 
				all_source
			where
				owner = upper(owner_in)
			and
				name = upper(pkg_in)
			and 
				type = 'PACKAGE BODY'
			order by 
				line asc;

		in_start			boolean := false;
		token_depth			number := 0;

	begin

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

					if instr(upper(lines.text), 'END;') > 0 or (instr(upper(lines.text), 'END') > 0 and instr(upper(lines.text), upper(prc_in)) > 0)then
						token_depth := token_depth - 1;
					end if;
				end if;

				-- Break when token_depth reaches zero
				if token_depth = 0 then
					-- We are at the end of the line, mark it and break the loop
					boundary_end := lines.line;
					exit;
				end if;
			else
				if (instr(upper(lines.text), 'PROCEDURE ' || upper(prc_in)) > 0) or (instr(upper(lines.text), 'FUNCTION ' || upper(prc_in)) > 0) then
					boundary_start := lines.line;
					token_depth := 1;
					in_start := true;
				end if;
			end if;
		end loop;

	end get_program_boundary;

	procedure extract_program_attributes (
		package_name 		in 				varchar2
		, prc_name 			in 				varchar2
		, pkg_owner 		in 				varchar2
		, program_index		in 				number
		, pkg_def 			in out nocopy	document_rec
	)

	as

		start_at			number;
		end_at				number;

		cursor analyze_lines(s number, e number) is
			select
				text
			from
				all_source
			where
				owner = upper(pkg_owner)
			and
				name = upper(package_name)
			and 
				type = 'PACKAGE BODY'
			and
				line between s and e;

		fixed_line			varchar2(4000);
		in_comment			boolean := false;
		in_exception		boolean := false;

		-- Negative attributes
		no_instrumentation	boolean := true;

	begin

		get_program_boundary(package_name, prc_name, pkg_owner, start_at, end_at);

		for line in analyze_lines(start_at, end_at) loop
			fixed_line := trim(line.text);
			fixed_line := ltrim(fixed_line, chr(9));
			fixed_line := upper(fixed_line);
			if substr(fixed_line, 1, 2) = '/*' then
				in_comment := true;
			elsif in_comment then
				if substr(fixed_line, -1, 2) = '*/' then
					in_comment := false;
				end if;
			elsif substr(fixed_line, 1, 2) = '--' then
				--ignore single line comments
				null;
			else
				-- Check line for attributes
				if instr(fixed_line, 'INSERT ') > 0 then
					pkg_def.programs(program_index).attrs('Insert') := true;
				end if;
				if instr(fixed_line, 'UPDATE ') > 0 then
					pkg_def.programs(program_index).attrs('Update') := true;
				end if;
				if instr(fixed_line, 'DELETE ') > 0 then
					pkg_def.programs(program_index).attrs('Delete') := true;
				end if;
				if instr(fixed_line, 'EXECUTE IMMEDIATE') > 0 then
					pkg_def.programs(program_index).attrs('Dynamic SQL') := true;
				end if;
				if instr(fixed_line, 'COMMIT;') > 0 then
					pkg_def.programs(program_index).attrs('Commit') := true;
				end if;
				if instr(fixed_line, 'ROLLBACK;') > 0 then
					pkg_def.programs(program_index).attrs('Rollback') := true;
				end if;
			end if;
		end loop;

		-- At the end we check for negative attributes
		if no_instrumentation then
			pkg_def.programs(program_index).attrs('No Instrumentation') := true;
		end if;

	end extract_program_attributes;

	procedure extract_program_meta (
		package_name		in 				varchar2
		, program_name		in 				varchar2
		, pkg_owner			in 				varchar2
		, c_program			in 				program_rec
		, c_param			in 				param_list
		, pkg_def			in out nocopy	document_rec
	)

	as

		cursor get_parms is
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

		parm_found		boolean := false;
		prog_count		number := 1;

	begin

		if pkg_def.programs.count > 0 then
			prog_count := pkg_def.programs.count + 1;
		end if;

		-- Load information about the program to main container
		pkg_def.programs(prog_count).programName := program_name;
		pkg_def.programs(prog_count).description := c_program.description;
		pkg_def.programs(prog_count).throws := c_program.throws;
		pkg_def.programs(prog_count).programType := c_program.programType;
		pkg_def.programs(prog_count).returnDesc := c_program.returnDesc;
		pkg_def.programs(prog_count).author := c_program.author;

		-- First we load parameters and re-arrange positions from what have already been described.
		if c_param.count = 0 then
			-- only load dictionary parameters
			for parms in get_parms loop
				if parms.position = 0 and pkg_def.programs(prog_count).programType = 'FUNCTION' then
					pkg_def.programs(prog_count).returnType := parms.data_type;
				elsif parms.argument_name is not null then
					pkg_def.programs(prog_count).params(parms.position).paramType := parms.data_type;
					pkg_def.programs(prog_count).params(parms.position).paramName := parms.argument_name;
					if parms.default_value is not null then
						pkg_def.programs(prog_count).params(parms.position).defaultValue := parms.default_value;
					end if;
				end if;
			end loop;
		else
			-- We need to check c_param data as well as dictionary data
			for parms in get_parms loop
				if parms.position = 0 and pkg_def.programs(prog_count).programType = 'FUNCTION' then
					pkg_def.programs(prog_count).returnType := parms.data_type;
				elsif parms.argument_name is not null then
					for i in 1..c_param.count loop
						if upper(c_param(i).paramName) = upper(parms.argument_name) then
							pkg_def.programs(prog_count).params(parms.position).description := c_param(i).description;
							pkg_def.programs(prog_count).params(parms.position).paramName := c_param(i).paramName;
							parm_found := true;
						end if;
					end loop;
					if parm_found then
						pkg_def.programs(prog_count).params(parms.position).paramType := parms.data_type;
					else
						pkg_def.programs(prog_count).params(parms.position).paramType := parms.data_type;
						pkg_def.programs(prog_count).params(parms.position).paramName := parms.argument_name;
					end if;
					if parms.default_value is not null then
						pkg_def.programs(prog_count).params(parms.position).defaultValue := parms.default_value;
					end if;
				end if;
				parm_found := false;
			end loop;
		end if;

		extract_program_attributes(package_name, program_name, pkg_owner, prog_count, pkg_def);

	end extract_program_meta;

	procedure parse_package_meta (
		package_name		in 				varchar2
		, pkg_owner			in 				varchar2
		, pkg_def			in out nocopy	document_rec
	)

	as

		working_line		varchar2(4000);

		in_parse			boolean := false;
		in_description		boolean := false;
		parse_block_ready	boolean := false;
		fixed_line			varchar2(4000);
		program_catch		varchar2(4000);
		param_loc1			number;
		param_loc2			number;

		c_description		clob;
		c_author			varchar2(4000);
		c_version			varchar2(4000);
		c_object_name		varchar2(200);
		c_returns			varchar2(4000);
		c_project			varchar2(4000);
		c_throws			varchar2(4000);
		c_program			program_rec;
		c_param				param_list;

		procedure parse_line (
			line_to_parse	varchar2
		)

		as

			next_param_count	pls_integer;
			fixed_line			varchar2(4000);
			param_loc1			number;
			param_loc2			number;

		begin

			if instr(line_to_parse, 'project') > 0 then
				c_project := substr(line_to_parse, instr(line_to_parse, '@project') + 9);
			end if;
			if instr(line_to_parse, 'author') > 0 then
				c_author := substr(line_to_parse, instr(line_to_parse, '@author') + 8);
			end if;
			if instr(line_to_parse, 'version') > 0 then
				c_version := substr(line_to_parse, instr(line_to_parse, '@version') + 9);
			end if;
			if instr(line_to_parse, 'return') > 0 then
				c_returns := substr(line_to_parse, instr(line_to_parse, '@return') + 8);
			end if;
			if instr(line_to_parse, 'throws') > 0 then
				c_throws := substr(line_to_parse, instr(line_to_parse, '@throws') + 8);
			end if;
			if instr(line_to_parse, 'exception') > 0 then
				c_throws := substr(line_to_parse, instr(line_to_parse, '@exception') + 11);
			end if;
			if instr(line_to_parse, 'param') > 0 then
				-- First count and add new param member
				if c_param.count > 0 then
					next_param_count := c_param.count + 1;
				else
					next_param_count := 1;
				end if;
				-- Replace all tabs with spaces for easier parsing
				fixed_line := replace(line_to_parse, chr(9), ' ');
				param_loc1 := instr(fixed_line, '@param') + 7;
				param_loc2 := instr(fixed_line, ' ', param_loc1);
				c_param(next_param_count).paramName := substr(fixed_line, param_loc1, param_loc2 - param_loc1);
				c_param(next_param_count).description := substr(fixed_line, param_loc2 + 1);
			end if;

		end parse_line;

		procedure reset_parms

		as

		begin

			c_description := null;
			c_author := null;
			c_version := null;
			c_object_name := null;
			c_returns := null;
			c_project := null;
			c_throws := null;
			c_param.delete;
			c_program.programName := null;
			c_program.programType := null;
			c_program.throws := null;
			c_program.returnType := null;
			c_program.returnDesc := null;
			c_program.author := null;
			c_program.params.delete;
			c_program.attrs.delete;

			in_description := false;
			in_parse := false;
			parse_block_ready := false;

		end reset_parms;

		procedure display_current

		as

			attr_index	varchar2(250);

		begin

			dbms_output.put_line('Package name: ' || pkg_def.packageName);
			dbms_output.put_line('Package author: ' || pkg_def.author);
			dbms_output.put_line('Package description: ' || pkg_def.description);

			for i in 1..pkg_def.programs.count loop
				dbms_output.put_line('- Program name: ' || pkg_def.programs(i).programName);
				dbms_output.put_line('- Program author: ' || pkg_def.programs(i).author);
				dbms_output.put_line('- Program description: ' || pkg_def.programs(i).description);
				for u in 1..pkg_def.programs(i).params.count loop
					dbms_output.put_line('    Parameter name: ' || pkg_def.programs(i).params(u).paramName);
					dbms_output.put_line('    Parameter type: ' || pkg_def.programs(i).params(u).paramType);
				end loop;
				attr_index := pkg_def.programs(i).attrs.first;
				while attr_index is not null loop
					dbms_output.put_line('    Attribute: ' || attr_index);
					attr_index := pkg_def.programs(i).attrs.next(attr_index);
				end loop;
			end loop;

		end display_current;

	begin

		pkg_def.packageName := package_name;

		for i in 1..meta_current.count loop
			working_line := trim(meta_current(i));
			working_line := ltrim(working_line, chr(9));

			if (upper(substr(working_line, 1, 9)) = 'PROCEDURE') or (upper(substr(working_line, 1, 8)) = 'FUNCTION') then
				-- Stupid recheck
				if upper(substr(working_line, 1, 9)) = 'PROCEDURE' then
					program_catch := 'PROCEDURE';
				else
					program_catch := 'FUNCTION';
				end if;
				-- Extract program name
				fixed_line := replace(working_line, chr(9), ' ');
				param_loc1 := instr(upper(fixed_line), program_catch) + length(program_catch) + 1;
				param_loc2 := instr(fixed_line, ' ', param_loc1);
				if param_loc2 > 0 then
					c_object_name := substr(fixed_line, param_loc1, param_loc2 - param_loc1);
				else
					c_object_name := replace(substr(fixed_line, param_loc1), '(');
				end if;
				-- check if we already have a documentation for this procedure/function
				if parse_block_ready then
					-- We need to finish documentation for this procedure.
					c_program.programName := c_object_name;
					c_program.programType := program_catch;
					c_program.description := c_description;
					c_program.author := c_author;
					c_program.throws := c_throws;
					c_program.returnDesc := c_returns;
					extract_program_meta(package_name, c_object_name, pkg_owner, c_program, c_param, pkg_def);
					parse_block_ready := false;
					-- Once we are here we can reset variables
					reset_parms;
				else
					if in_parse then
						-- incomplete parse lines. Use what we got and extract meta
						c_program.programName := c_object_name;
						c_program.programType := program_catch;
						c_program.description := c_description;
						c_program.author := c_author;
						c_program.throws := c_throws;
						c_program.returnDesc := c_returns;
						extract_program_meta(package_name, c_object_name, pkg_owner, c_program, c_param, pkg_def);
						reset_parms;
					else
						-- we have no inputs, just extract meta information
						-- from dictionary
						c_program.programName := c_object_name;
						c_program.programType := program_catch;
						c_program.description := c_description;
						c_program.author := c_author;
						c_program.throws := c_throws;
						c_program.returnDesc := c_returns;
						extract_program_meta(package_name, c_object_name, pkg_owner, c_program, c_param, pkg_def);
						reset_parms;
					end if;
				end if;
			end if;

			
			if substr(working_line, 1, 3) = '/**' then
				-- First check if we already have a documentation block ready
				-- This is in case we have a package description before the
				-- documentation for the members themselves.
				if parse_block_ready then
					pkg_def.description := c_description;
					pkg_def.project := c_project;
					pkg_def.author := c_author;
					pkg_def.version := c_version;
					reset_parms;
				end if;
				in_parse := true;
				in_description := true;
				if length(working_line) > 3 then
					-- dbms_output.put_line('Description on start doc line');
					c_description := c_description || ' ' || substr(working_line, 5);
				end if;
			elsif substr(working_line, 1, 1) = '*' and substr(working_line, 2, 1) != '/' then
				-- in other line
				if in_parse then
					if in_description and (substr(working_line, 3, 1) = '@') then
						-- out of description
						in_description := false;
						parse_line(working_line);
					elsif in_description then
						-- still in description
						if working_line = '*' or working_line = '* ' then
							-- just add a br
							c_description := c_description || ' <br> ';
						else
							c_description := c_description || ' ' || substr(working_line, 3);
						end if;
					else
						-- parse line
						parse_line(working_line);
					end if;
				end if;
			elsif substr(working_line, 1, 2) = '*/' and in_parse then
				-- in last line of documentation parse
				in_parse := false;
				parse_block_ready := true;
			end if;

		end loop;

		-- display_current;

	end parse_package_meta;

	procedure write_ember_fixtures (
		documentation_run	in 			run_rec
	)

	as

		docdb_out_file			utl_file.file_type;
		docdb_file_name			varchar2(250) := 'docdb_fixtures.js';
		c_piece					clob;
		package_piece			clob;
		package_piece_temp		clob;
		program_piece			clob;
		program_piece_temp		clob;
		parameter_piece			clob;
		parameter_piece_temp	clob;
		attribute_piece			clob;
		attribute_piece_temp	clob;
		final_piece				clob;
		program_attr_idx		varchar2(200);
		program_attr_count		number := 0;

		pkg_list_ids		varchar2(4000);
		prg_list_ids		varchar2(4000);
		par_list_ids		varchar2(4000);
		atr_list_ids		varchar2(4000);

		tab_count			number := 0;
		docdb_tab_exist		boolean := false;

		procedure write_piece (
			piece_in		clob
		)

		as

			w_amount					number default 32000;
			w_offset					number default 1;
			w_length					number default nvl(dbms_lob.getlength(piece_in),0);

		begin

			if out_default = 'DIRECTORY' then
				if w_length < 32760 then
					utl_file.put(docdb_out_file, piece_in);
				else
					while ( w_offset < w_length ) loop
						utl_file.put(docdb_out_file, dbms_lob.substr(piece_in, w_amount, w_offset) );
						utl_file.fflush(docdb_out_file);
						w_offset := w_offset + w_amount;
					end loop;
				end if;
				utl_file.new_line(docdb_out_file);
			elsif out_default = 'SPOOL' then
				dbms_output.put_line(piece_in);
			elsif out_default = 'TABLE' then
				if docdb_tab_exist then
					execute immediate 'insert into ' || out_default_val || ' values (:b1)'
					using piece_in;
				else
					select count(*)
					into tab_count
					from user_tables
					where table_name = upper(out_default_val);
					if tab_count = 0 then
						-- create it
						execute immediate 'create table ' || out_default_val || '(docdb_content clob)';
						execute immediate 'insert into ' || out_default_val || ' values (:b1)'
						using piece_in;
						docdb_tab_exist := true;
					else
						execute immediate 'insert into ' || out_default_val || ' values (:b1)'
						using piece_in;
						docdb_tab_exist := true;
					end if;
				end if;
			end if;

		end write_piece;

	begin

		-- Unpack pkg_def to ember fixtures
		if out_default = 'DIRECTORY' then
			docdb_out_file := utl_file.fopen(out_default_val, docdb_file_name, 'A', 32760);
		end if;

		-- Beginning of final pieces:
		package_piece := 'Docapp.Package.FIXTURES = [';
		program_piece := 'Docapp.Program.FIXTURES = [';
		parameter_piece := 'Docapp.Parameter.FIXTURES = [';
		attribute_piece := 'Docapp.Attrib.FIXTURES = [';
		
		-- Packages
		pkg_list_ids := '[';
		for i in 1..documentation_run.run_pkg_list.count loop
			pkg_list_ids := pkg_list_ids || i || ',';

			-- Loop over all programs
			prg_list_ids := '[';
			for y in 1..documentation_run.run_pkg_list(i).programs.count loop
				prg_list_ids := prg_list_ids || to_char(y + program_counter) || ',';

				-- Loop over all parameters
				par_list_ids := '[';
				for u in 1..documentation_run.run_pkg_list(i).programs(y).params.count loop
					par_list_ids := par_list_ids || to_char(u + parameter_counter) || ',';

					parameter_piece_temp := '{
						id: ' || to_char(u + parameter_counter) || ',
						paramName: ''' || documentation_run.run_pkg_list(i).programs(y).params(u).paramName || ''',
						paramType: ''' || documentation_run.run_pkg_list(i).programs(y).params(u).paramType || ''',
						paramDescription: ''' || documentation_run.run_pkg_list(i).programs(y).params(u).description || ''',
						paramDefaultValue: ''' || documentation_run.run_pkg_list(i).programs(y).params(u).defaultValue || ''',
						paramProgram_id: ' || to_char(y + program_counter) || '
					},';
					parameter_piece := parameter_piece || parameter_piece_temp;

					-- Increment counters
					parameter_counter := parameter_counter + 1;
				end loop;
				if documentation_run.run_pkg_list(i).programs(y).params.count >= 1 then
					par_list_ids := substr(par_list_ids, 1, length(par_list_ids) -1) || ']';
				else
					par_list_ids := par_list_ids || ']';
				end if;

				-- Loop over all program attributes
				atr_list_ids := '[';
				program_attr_idx := documentation_run.run_pkg_list(i).programs(y).attrs.first;
				while program_attr_idx is not null then
					program_attr_count := program_attr_count + 1;
					atr_list_ids := atr_list_ids || to_char(program_attr_count + attribute_counter) || ',';

					attribute_piece_temp := '{
						id: ' || to_char(program_attr_count + attribute_counter) || ',
						attribName: ''' || program_attr_idx || ''',
						attribSet: true,
						attribProgram_id: '|| to_char(y + program_counter) || '
					},';

					program_attr_idx := documentation_run.run_pkg_list(i).programs(y).attrs.next(program_attr_idx);
					attribute_counter := attribute_counter + 1;
				end loop;
				if program_attr_count >= 1 then
					atr_list_ids := substr(atr_list_ids, 1, length(atr_list_ids) -1) || ']';
				else
					atr_list_ids := atr_list_ids || ']';
				end if;

				program_piece_temp := '{
					id: ' || to_char(y + program_counter) || ',
					programName: ''' || documentation_run.run_pkg_list(i).programs(y).programName || ''',
					programType: ''' || documentation_run.run_pkg_list(i).programs(y).programType || ''',
					programDescription: ''' || documentation_run.run_pkg_list(i).programs(y).description || ''',
					programAuthor: ''' || documentation_run.run_pkg_list(i).programs(y).author || ''',
					programReturn: ''' || documentation_run.run_pkg_list(i).programs(y).returnDesc || ''',
					programReturnType: ''' || documentation_run.run_pkg_list(i).programs(y).returnType || ''',
					programParams_ids: '|| par_list_ids ||',
					programPackage_id: ' || i || '
				},';
				program_piece := program_piece || program_piece_temp;

				-- Reset lists and increment counters
				par_list_ids := null;
				program_counter := program_counter + 1;
				parameter_counter := parameter_counter + documentation_run.run_pkg_list(i).programs(y).params.count;
				attribute_counter := attribute_counter + program_attr_count;
			end loop;
			prg_list_ids := substr(prg_list_ids, 1, length(prg_list_ids) -1) || ']';

			package_piece_temp := '{
				id: '|| i || ',
				packageName: ''' || documentation_run.run_pkg_list(i).packageName || ''',
				description: ''' || documentation_run.run_pkg_list(i).description || ''',
				project: ''' || documentation_run.run_pkg_list(i).project || ''',
				author: ''' || documentation_run.run_pkg_list(i).author || ''',
				version: ''' || documentation_run.run_pkg_list(i).version || ''',
				programs_ids: ' || prg_list_ids || ',
				doc: ' || documentation_run.run_id || '
			},';
			package_piece := package_piece || package_piece_temp;

			-- Reset lists
			prg_list_ids := null;
			program_counter := program_counter + documentation_run.run_pkg_list(i).programs.count;
		end loop;
		pkg_list_ids := substr(pkg_list_ids, 1, length(pkg_list_ids) -1) || ']';

		-- Main piece
		c_piece := 'Docapp.Completedoc.FIXTURES = [{
			id: ' || documentation_run.run_id || ',
			docname: ''' || documentation_run.run_name || ''',
			docgenerated: ''' || to_char(documentation_run.run_date, 'DD Mon YYYY') || ''',
			packages_ids: '|| pkg_list_ids ||',
			standalone_ids: []
		}];';

		-- Finish final pieces
		parameter_piece := substr(parameter_piece, 1, length(parameter_piece) -1) || '];';
		package_piece := substr(package_piece, 1, length(package_piece) -1) || '];';
		program_piece := substr(program_piece, 1, length(program_piece) -1) || '];';
		attribute_piece := substr(attribute_piece, 1, length(attribute_piece) -1) || '];';
		
		/* write_piece(c_piece);
		write_piece(package_piece);
		write_piece(program_piece);
		write_piece(parameter_piece); */

		final_piece := c_piece || package_piece || program_piece || parameter_piece || attribute_piece;
		write_piece(final_piece);

		if out_default = 'DIRECTORY' then
			utl_file.fclose(docdb_out_file);
		end if;

	end write_ember_fixtures;

	procedure document_schema (
		schema_name			in			varchar2 default USER
	)

	as

		cursor get_packages is
			select 
				object_name
				, object_id
			from 
				all_objects
			where
				owner = schema_name
			and
				object_type = 'PACKAGE';

		meta_ddl		clob;
		pkg_def			document_rec;
		run_details		run_rec;

		procedure reset_package_vars
		
		as
		
		begin

			pkg_def.packageName := null;
			pkg_def.description := null;
			pkg_def.project := null;
			pkg_def.author := null;
			pkg_def.version := null;
			pkg_def.programs.delete;

		end reset_package_vars;

	begin

		run_details.run_date := sysdate;
		run_details.run_type := 'schema';
		run_details.run_name := schema_name;
		run_details.run_description := 'Documentation of schema: ' || schema_name;
		run_details.run_id := 1;

		-- Loop over all packages and get ddl for the header, parsing them for comments
		for pkg_header in get_packages loop 
			meta_ddl := dbms_metadata.get_ddl(
				object_type => 'PACKAGE_SPEC'
				, name => pkg_header.object_name
				, schema => schema_name
			);

			meta_clob_to_lines(meta_ddl);
			parse_package_meta(pkg_header.object_name, schema_name, pkg_def);

			-- Add package to full list
			run_details.run_pkg_list(run_details.run_pkg_list.count + 1) := pkg_def;

			-- Reset package values
			reset_package_vars;
		end loop;

		write_ember_fixtures(run_details);

	end document_schema;

end docdb;
/