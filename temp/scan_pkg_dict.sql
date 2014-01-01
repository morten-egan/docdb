create or replace procedure scan_pkg_dict (
	pkg_in				varchar2		default		'PROCDOC'
	, prc_in			varchar2		default		'DOCUMENT_SCHEMA'
	, owner_in			varchar2		default		'DOCDB'
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

	boundary_start		number;
	in_start			boolean := false;
	boundary_end		number;
	token_depth			number := 0;

begin

	for lines in get_source loop
		if in_start then
			-- Search for tokens needing an end, and if found up the token_depth
			if instr(lines.text, '--') = 0 then
				if instr(upper(lines.text), 'IF') > 0 then
					token_depth := token_depth + 1;
					dbms_output.put_line('Increment IF: ' || lines.text);
				end if;

				if instr(upper(lines.text), 'FOR ') > 0 and instr(upper(lines.text), ' LOOP') > 0 then
					token_depth := token_depth + 1;
					dbms_output.put_line('Increment FOR: ' || lines.text);
				end if;

				if instr(upper(lines.text), 'WHILE ') > 0 and instr(upper(lines.text), ' LOOP') > 0 then
					token_depth := token_depth + 1;
					dbms_output.put_line('Increment WHILE: ' || lines.text);
				end if;

				-- Search for end token, and if found decrement the token_depth
				if instr(upper(lines.text), 'END IF') > 0 then
					token_depth := token_depth - 1;
					dbms_output.put_line('Decrement END IF: ' || lines.text);
				end if;

				if instr(upper(lines.text), 'END LOOP') > 0 then
					token_depth := token_depth - 1;
					dbms_output.put_line('Decrement END LOOP: ' || lines.text);
				end if;

				if instr(upper(lines.text), 'END;') > 0 or (instr(upper(lines.text), 'END') > 0 and instr(upper(lines.text), upper(prc_in)) > 0)then
					token_depth := token_depth - 1;
					dbms_output.put_line('Decrement END: ' || lines.text);
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

	dbms_output.put_line('Program starts at line: ' || boundary_start);
	dbms_output.put_line('Registered token depth: ' || token_depth);
	dbms_output.put_line('Program ends at line: ' || boundary_end);

end scan_pkg_dict;
/