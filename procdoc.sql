create or replace package procdoc

as
	
	/**
	* @project	Generate PL/SQL documentation from the database
	* @description	A tool to generate a web based documentation of database plsql code, using new web functionality to build
	* a more responsive and intuitive interface, than existing solutions
	* @revision 1.0.34
	* @author Morten Egan
	*/

	/**
	* Document a procedure or function
	* @param	proc_owner	The owner of the procedure or function
	* @param	proc_name	The name of the procedure or function to document
	* @param	pkg_name	Optional name of the package that the procedure or function is defined in
	*/
	procedure document_procfunc (
		proc_owner			in			varchar2
		, proc_name			in			varchar2
		, pkg_name			in			varchar2 default null
	);

	/** The top calling procedure to document an entire schema
	* @param	schema_name	The name of the schema to document. Defaults to current user
	*/
	procedure document_schema (
		schema_name			in			varchar2 default USER
	);

end procdoc;
/

create or replace package body procdoc

as

	function sa_procfunc_list (
		procfunc_owner		in 			varchar2
	)
	return sys_refcursor

	as

		sa_procfunc_curs	sys_refcursor;

	begin

		return sa_procfunc_curs;

	end sa_procfunc_list;

	procedure document_procfunc (
		proc_owner			in			varchar2
		, proc_name			in			varchar2
		, pkg_name			in			varchar2 default null
	)
	authid current_user

	as

	begin

		null;

	end document_procfunc;

	procedure document_schema (
		schema_name			in			varchar2 default USER
	)
	authid current_user

	as

	begin

		null;

	end document_schema;

end procdoc;
/