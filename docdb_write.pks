create or replace package docdb_write

as

	procedure write_doc (
        parser              in out nocopy       docdb_parse.parse_type
    );

end docdb_write;
/