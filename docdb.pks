create or replace package docdb
authid current_user

as

	type docdb_settings is table of varchar2(4000) index by varchar2(250);

	procedure document_schema (
		schema_name				in			varchar2
		, document_settings		in 			docdb_settings default null
	);

	procedure document_current (
		document_settings		in 			docdb_settings default null
	);

	procedure document_package (
		package_name			in			varchar2
		, schema_name			in			varchar2 default user
		, document_settings		in 			docdb_settings default null
	);

end docdb;
/