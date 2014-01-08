create or replace package docdb_tools

as

	procedure prepare_line_for_parse (
		parser 				in out nocopy 		docdb_parse.parse_type
		, line_id			in 					number
	);

	function get_metadata_clob (
		obj_type 			in 					varchar2
		, obj_name 			in 					varchar2
		, obj_schema 		in 					varchar2
	)
	return clob;

	procedure parse_documentation_line (
		parser 				in out nocopy 		docdb_parse.parse_type
		, line_to_parse		in					number
	);

	procedure extract_package_program_name (
		parser 				in out nocopy 		docdb_parse.parse_type
		, start_from_line	in					number
	);

	procedure parse_program_dictionary (
		parser 				in out nocopy		docdb_parse.parse_type
	);

	procedure reset_current_parse (
        parser              in out nocopy       docdb_parse.parse_type
    );

    procedure display_current_parse (
        parser              in out nocopy       docdb_parse.parse_type
    );

    procedure parse_current_as_package_doc (
    	parser 				in out nocopy		docdb_parse.parse_type
    );

    procedure parse_current_as_program_doc (
    	parser 				in out nocopy		docdb_parse.parse_type
    );

end docdb_tools;
/