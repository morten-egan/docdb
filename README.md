Project docdb readme file
==================================

* Package to generate plsql documentation.
* For more information please got to the [docdb tutorials](http://www.codemonth.dk/code_is_good/dev_qa_prod.assert?condition=codemonth:::1:)

Installation instructions:
----------------------

First of download the latest release zip file. This is available from the release page of the project:

[LATEST DOCDB_RELEASE.ZIP](https://github.com/morten-egan/docdb/releases)

Extract the zip to a seperate location on the server.

You can install the package into any schema that meets the following requirements:

* Has the "create procedure" privilege
* Has the "create type" privilege
* Has the "create public synonym" privilige
* Has write privileges to a directory, that by default is called DOCDB_OUTPUT (read on for how to set it to another directory)

To do the installation, start sqlplus and login as the schema that should own the package. It does not matter what schema this package is installed to, since it will always run with the privileges of the user executing the procedures, and so will only be able to see packages that they are privileged to see.

At the sqlplus prompt run the following:

	@[location_of_docdb_files]/oracle/install.sql

Usage:
--------------------

You can create documentation in a couple of different ways. Below are some examples of the most common usages:

*Create documentation of a single package:*

	begin
		docdb.document_package(package_name => 'A_PKG_NAME');
	end;
	/

*Create documentation of all the packages of the currently connected user:*

	begin
		docdb.document_current;
	end;
	/

*Create documentation of a schema that you have execute privileges to:*

	begin
		docdb.document_schema(schema_name => 'schema_name_in_here');
	end;
	/

*To set the output directory to a different directory with a non-default name:*

	declare
		settings	docdb.docdb_settings;
	begin
		settings('out_default_val') := 'YOUR_DIRECTORY_NAME';
		docdb.document_current(document_settings => settings);
	end;
	/

*Create documentation of a list of schemas:*

	begin
		docdb.document_schema(schema_name => 'schema1,schema2,schema3');
	end;
	/

Looking at the result:
----------------------------

To see the documentation, take the file generated in the output directory (docdb_controller_data.js) and place it alongside the js files in the zip file. To work, it needs the following files:

* docdb_controller.js
* docdb_controller_2.js
* angular_app.js

Place docdb_controller_data.js in the same location [unzipped location]/js, and open docdb.html in your browser.
