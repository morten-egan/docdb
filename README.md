Project docdb readme file
==================================

* Package to generate plsql documentation

Installation instructions:
----------------------

First of download docdb_release.zip. This is always the newest version available:

[LATEST DOCDB_RELEASE.ZIP](docdb_release.zip?raw=true)

You can install the package into any schema that meets the following requirements:

* Has the "create procedure" privilege
* Has the "create public synonym" privilige
* Has write privileges to a directory, that by default is called DOCDB_OUTPUT (read on for how to set it to another directory)

To do the installation, start sqlplus and login as the schema that should own the package. It does not matter what schema this package is installed to, since it will always run with the privileges of the user executing the procedures, and so will only be able to see packages that they are privileged to see.

At the sqlplus prompt run the following:

	@[location_of_docdb_files]/install.sql

Usage:
--------------------

You can create documentation in a couple of different ways. Below are some examples of the most common usages:

*Create documentation of the currently connected user:*

	begin
		docdb.document_current;
	end;
	/

*Create documentation of a schema that you have execute privileges to:*

	begin
		docdb.document_schema('schema_name_in_here');
	end;
	/

*To set the output directory to an existing or new directory with a non-default name:*

	begin
		docdb.set_option('out_default_val', 'YOUR_DIRECTORY_NAME');
		docdb.document_current;
	end;
	/

*Create documentation of a list of schemas:*