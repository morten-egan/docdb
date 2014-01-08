create or replace package body docdb_write

as

	type piece_list is table of clob index by varchar2(200);
	type attr_list is table of varchar2(4000) index by varchar2(200);

	docdb_pieces			piece_list;
	docdb_write_attributes	attr_list;
    docdb_out_file			utl_file.file_type;

    procedure actual_write (
    	piece				in 					clob
    )

    as

    	w_amount					number default 32000;
		w_offset					number default 1;
		w_length					number default nvl(dbms_lob.getlength(piece),0);
		t_exists					number;
		t_create					varchar2(4000) := 'create table ' || substr(docdb_write_attributes('out_default_val'), 1, 30) || ' (docid number, piece clob)';
		t_insert					varchar2(4000) := 'insert into ' || substr(docdb_write_attributes('out_default_val'), 1, 30) || ' (docid, piece) values (:b1, :b2)';

    begin

    	if docdb_write_attributes('out_default') = 'DIRECTORY' then
    		docdb_out_file := utl_file.fopen(docdb_write_attributes('out_default_val'), docdb_write_attributes('docdb_file_name'), 'A', 32760);
    	end if;

    	if docdb_write_attributes('out_default') = 'DIRECTORY' then
			if w_length < 32760 then
				utl_file.put(docdb_out_file, piece);
			else
				while ( w_offset < w_length ) loop
					utl_file.put(docdb_out_file, dbms_lob.substr(piece, w_amount, w_offset) );
					utl_file.fflush(docdb_out_file);
					w_offset := w_offset + w_amount;
				end loop;
			end if;
			utl_file.new_line(docdb_out_file);
		elsif docdb_write_attributes('out_default') = 'SPOOL' then
			dbms_output.put_line(piece);
		elsif docdb_write_attributes('out_default') = 'TABLE' then
			select count(*)
			into t_exists
			from user_tables
			where table_name = upper(substr(docdb_write_attributes('out_default_val'), 1, 30));
			if t_exists > 0 then
				execute immediate t_insert using docdb_write_attributes('docid'), piece;
			else
				execute immediate t_create;
				execute immediate t_insert using docdb_write_attributes('docid'), piece;
			end if;
		end if;

    	if docdb_write_attributes('out_default') = 'DIRECTORY' then
			utl_file.fclose(docdb_out_file);
		end if;

    end actual_write;

    procedure aetp (
        str                 in                  clob
        , list              in out nocopy       clob
        , enclose_elem      in                  varchar2        default '{}'
        , seperate_by       in                  varchar2        default ','
    )

    as

    begin

        null;

    end add_string_to_list;

    procedure cp (
    	piece_name			in 					varchar2
    	, with_temp_piece	in 					boolean default true
    )

    as

    begin

    	docdb_pieces(piece_name) := '';
        if with_temp_piece then
    	   docdb_pieces(piece_name || '_temp') := '';
        end if;

    end cp;

    procedure atp (
    	piece_name			in 					varchar2
    	, piece_to_append	in 					varchar2
    )

    as

    begin

    	docdb_pieces(piece_name) := docdb_pieces(piece_name) || docdb_pieces(piece_to_append);

    end atp;

    procedure ptp (
        piece_name          in                  varchar2
        , piece_to_prepend  in                  varchar2
    )

    as

    begin

        docdb_pieces(piece_name) := docdb_pieces(piece_to_prepend) || docdb_pieces(piece_name);

    end ptp;

    procedure tp (
        piece_name          in                  varchar2
        , content           in                  clob
        , to_temp           in                  boolean default false
    )

    as

    begin

        if to_temp then
            docdb_pieces(piece_name || '_temp') := content;
        else
            docdb_pieces(piece_name) := content;
        end if;

    end tp;

    procedure astp (
        piece_name          in                  varchar2
        , content           in                  clob
        , to_temp           in                  boolean default false
    )

    as

    begin

        if to_temp then
            docdb_pieces(piece_name || '_temp') := docdb_pieces(piece_name || '_temp') || content;
        else
            docdb_pieces(piece_name) := docdb_pieces(piece_name) || content;
        end if;

    end astp;

    procedure write_ember (
    	parser 				in out nocopy		docdb_parse.parse_type
    )

    as

    begin

        -- Create pieces
        cp('main', false);
        cp('packages');
        cp('programs');
        cp('parameters');
        cp('attributes');
        cp('package_list', false);
        cp('program_list', false);
        cp('parameter_list', false);

        tp('main', 'Docapp.Completedoc.FIXTURES = [{
            id: ' || parser.run_id || ',
            docname: ''' || parser.run_name || ''',
            docgenerated: ''' || to_char(parser.run_date, 'DD Mon YYYY') || ''',
            packages_ids: ');
        atp('main', 'package_list');
        astp('main', ',
            standalone_ids: []
        }];');

        atp('final', 'main');
        atp('final', 'packages');
        atp('final', 'programs');
        atp('final', 'parameters');
        atp('final', 'attributes');

    	actual_write(docdb_pieces('final'));

    end write_ember;

    procedure write_angular (
    	parser 				in out nocopy		docdb_parse.parse_type
    )

    as

    begin

    	actual_write(docdb_pieces('final'));

    end write_angular;

	procedure write_doc (
        parser              in out nocopy       docdb_parse.parse_type
    )

    as

    begin

    	-- Set parms from parser
    	docdb_write_attributes('docid') := parser.run_id; 

    	case docdb_write_attributes('out_default_format')
    		when 'EMBER' then
    			write_ember(parser);
    		when 'ANGULAR' then
    			write_angular(parser);
    	end case;

    end write_doc;

begin

	-- Set package defaults
	docdb_write_attributes('out_default')			:= 'TABLE';
	docdb_write_attributes('out_default_val')		:= 'DOCDB_OUTPUT';
	docdb_write_attributes('out_default_format')	:= 'EMBER';
	docdb_write_attributes('docdb_file_name')		:= 'docdb_fixtures.js';

	-- Make sure final piece exists
	docdb_pieces('final') := '';

end docdb_write;
/