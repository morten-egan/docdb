create or replace package docdb_generate

as

	out_default 					varchar2(50) := 'DIRECTORY';
	out_default_val					varchar2(250) := 'DOCDB_OUT';

	procedure doc_schema (
		i_schema_name			varchar2
	);

	procedure doc_package (
		i_package_name			varchar2
	);

	procedure doc_proc_func (
		i_proc_func_name		varchar2
	);

end docdb_generate;
/