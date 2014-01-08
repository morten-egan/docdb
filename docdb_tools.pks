create or replace package docdb_tools

as

	procedure add_string_to_list (
		str 				in					clob
		, list 				in out nocopy		clob
		, enclose_elem		in 					varchar2		default '{}'
		, seperate_by		in 					varchar2 		default ','
	);

	procedure write_piece (
		piece 				in					clob
		, write_type		in					varchar2 default 'DIRECTORY'
		, type_val			in					varchar2 default 'DOCDB_OUT'
	);

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

end docdb_tools;
/