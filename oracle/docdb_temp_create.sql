set define on
create or replace directory t_load as '&1';

create or replace procedure t_res_load(
	vers_in			varchar2
	, resource_in	varchar2
)

as

	temp_clob		clob;
	temp_file		utl_file.file_type;
	fline			varchar2(32000);

begin

	temp_file := utl_file.fopen('T_LOAD', resource_in, 'R', 32000);

	begin
		loop
			utl_file.get_line(temp_file, fline);
			temp_clob := temp_clob || fline;
		end loop;

		exception
			when others then
				null;
	end;

	insert into docdb_resources (
		resource_version
		, resource_name
		, resource_content
	) values (
		vers_in
		, resource_in
		, temp_clob
	);

	commit;

	utl_file.fclose(temp_file);

end t_res_load;
/