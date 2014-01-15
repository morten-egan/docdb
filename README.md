Project docdb readme file
==================================

* Package to generate plsql documentation

Installation instructions:
----------------------

You can install the package into any schema that meets the following requirements:

* Has the "create procedure" privilege
* Has the "create public synonym" privilige
* Has write privileges to a directory, that by default is called DOCDB_OUTPUT (read on for how to set it to another directory)

To do the installation, start sqlplus and login as the schema that should own the package. It does not matter what schema this package is installed to, since it will always run with the privileges of the user executing the procedures, and so will only be able to see packages that they are privileged to see.

At the sqlplus prompt run the following:
@<location_of_docdb_files>/install.sql
