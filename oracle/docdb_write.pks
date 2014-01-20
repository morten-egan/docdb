create or replace package docdb_write

as

	procedure write_doc (
        parser              in out nocopy       docdb_parse.parse_type
    );

    procedure set_write_attribute (
    	attribute_name 		in 					varchar2
    	, attribute_value	in 					varchar2
    );

end docdb_write;
/