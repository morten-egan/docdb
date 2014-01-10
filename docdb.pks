create or replace package docdb
authid current_user

as

	procedure document_schema (
		schema_name			in			varchar2
	);

	procedure document_current;

	procedure document_package (
		package_name		in			varchar2
		, schema_name		in			varchar2 default user
	);

end docdb;
/