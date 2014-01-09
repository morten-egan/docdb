create or replace package docdb
authid current_user

as
	
	/**
	* A tool to generate a web based documentation of database plsql code, using new web functionality to build
	* a more responsive and intuitive interface, than existing solutions
	* @project	Generate PL/SQL documentation from the database
	* @version 1.0.34
	* @author Morten Egan
	*/

	/** 
	* The top calling procedure to document an entire schema
	* @author My Other knome
	* @param	schema_name	The name of the schema to document. Defaults to current user
	*/
	procedure document_schema (
		schema_name			in			varchar2 default USER
	);

end docdb;
/