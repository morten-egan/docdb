create or replace package docdb_parse
authid current_user

as

	type info_arr is table of varchar2(4000) index by pls_integer;
	type attr_list is table of boolean index by varchar2(250);

	type program_parameter is record (
		parameter_name					varchar2(250)
		, parameter_position			number
		, parameter_type				varchar2(120)
		, parameter_description			clob
		, parameter_default_value		varchar2(4000)
		, parameter_out					boolean
		, parameter_in 					boolean
	);
	type program_parameter_list is table of program_parameter index by pls_integer;

	type program is record (
		program_name					varchar2(250)
		, program_owner					varchar2(250)
		, is_procedure					boolean
		, is_function					boolean
		, description 					clob
		, author						varchar2(4000)
		, throws						varchar2(4000)
		, return_description			clob
		, return_type					varchar2(4000)
		, parameters 					program_parameter_list
		, attributes					attr_list
	);
	type program_list is table of program index by pls_integer;

	type package_rec is record (
		package_name 					varchar2(250)
		, package_owner					varchar2(250)
		, description 					clob
		, project 						varchar2(4000)
		, author						varchar2(4000)
		, version						varchar2(4000)
		, programs 						program_list
	);
	type package_list is table of package_rec index by pls_integer;

	type parse_info is record (
		schema_list						info_arr
		, package_list					info_arr
		, procedure_list				info_arr
		, function_list					info_arr
		, documentation_block_start		number
		, documentation_block_end		number
		, documentation_pkg_block		boolean
		, program_spec_met				boolean
		, doc_written					boolean
		, program_boundary_start		number
		, program_boundary_end			number
	);

	type parse_counters is record (
		package_counter 				number
		, program_counter				number
		, parameter_counter				number
		, program_attr_counter			number
	);

	type parse_current is record (
		lines							info_arr
		, owner							varchar2(4000)
		, package_name					varchar2(4000)
		, program_name					varchar2(4000)
		, is_function					boolean
		, is_procedure					boolean
		, description 					clob
		, author						varchar2(4000)
		, version						varchar2(4000)
		, returns 						varchar2(4000)
		, throws						varchar2(4000)
		, project						varchar2(4000)
		, progr 						program
		, params 						program_parameter_list
	);

	type parse_type is record (
		parse_id						number
		, run_id						number
		, run_date_start				date
		, run_date_end					date
		, run_name						varchar2(250)
		, run_description				clob
		, info 							parse_info
		, counters 						parse_counters
		, current_data					parse_current
		, packages 						package_list
		, standalones					program_list
	);

	procedure parse_session_start (
		parser				in out nocopy		parse_type
		, name				in 					varchar2			default null
		, description 		in 					clob				default null
	);

	procedure add_schema_to_session (
		parser 				in out nocopy 		parse_type
		, schema 			in 					varchar2			default user
		, parse_packages	in 					boolean 			default true
		, parse_procedures 	in 					boolean				default false
		, parse_functions	in 					boolean				default false
	);

	procedure parse_session_end (
		parser				in out nocopy		parse_type
	);

	procedure parse (
		parser 				in out nocopy 		parse_type
	);

end docdb_parse;
/