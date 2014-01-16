create or replace package body docdb

as

	procedure document_schema (
		schema_name				in			varchar2
		, document_settings		in 			docdb_settings default null
	)

	as

		document 			docdb_parse.parse_type;
		settings 			docdb_parse.docdb_settings;

	begin

		if document_settings is not null then
			document.info.settings := document_settings;
		end if;

		docdb_parse.parse_session_start(document, schema_name, 'A complete documentation of the ' || schema_name || ' user.');
		if instr(schema_name, ',') > 0 then
			docdb_parse.add_multiple_schemas(document, schema_name);
		else
			docdb_parse.add_schema_to_session(document, schema_name);
		end if;
		docdb_parse.parse(document);
		docdb_parse.parse_session_end(document);
		docdb_write.write_doc(document);

	end document_schema;

	procedure document_current (
		document_settings		in 			docdb_settings default null
	)

	as

		document 			docdb_parse.parse_type;
		settings 			docdb_parse.docdb_settings;

	begin

		if document_settings is not null then
			document.info.settings := document_settings;
		end if;

		docdb_parse.parse_session_start(document, user, 'A complete documentation of the ' || user || ' user.');
		docdb_parse.add_schema_to_session(document, user);
		docdb_parse.parse(document);
		docdb_parse.parse_session_end(document);
		docdb_write.write_doc(document);

	end document_current;

	procedure document_package (
		package_name			in			varchar2
		, schema_name			in			varchar2 default user
		, document_settings		in 			docdb_settings default null
	)

	as

		document 			docdb_parse.parse_type;
		settings 			docdb_parse.docdb_settings;

	begin

		if document_settings is not null then
			document.info.settings := document_settings;
		end if;

		docdb_parse.parse_session_start(document, schema_name || '.' || package_name, 'Documentation of the package: ' || schema_name || '.' || package_name);
		docdb_parse.add_package(document, package_name, schema_name);
		docdb_parse.parse(document);
		docdb_parse.parse_session_end(document);
		docdb_write.write_doc(document);

	end document_package;

end docdb;
/