create or replace package body docdb_write

as

    type piece_list is table of clob index by varchar2(200);
    type attr_list is table of varchar2(4000) index by varchar2(200);

    docdb_pieces            piece_list;
    docdb_write_attributes  attr_list;
    docdb_out_file          utl_file.file_type;

    pkg_idx             number;
    prg_idx             number;
    par_idx             number;
    atr_idx             varchar2(4000);

    -- PLJSON Structs
    docdb_data          json := json();

    procedure actual_write (
        piece               in                  clob
    )

    as

        w_amount                    number default 32000;
        w_offset                    number default 1;
        w_length                    number default nvl(dbms_lob.getlength(piece),0);
        t_exists                    number;
        t_create                    varchar2(4000) := 'create table ' || substr(docdb_write_attributes('out_default_val'), 1, 30) || ' (doc_date date, docid number, piece clob)';
        t_insert                    varchar2(4000) := 'insert into ' || substr(docdb_write_attributes('out_default_val'), 1, 30) || ' (doc_date, docid, piece) values (:b1, :b2, :b3)';

    begin

        dbms_output.put_line('Length of clob is: ' || w_length);

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
                execute immediate t_insert using docdb_write_attributes('doc_date'), docdb_write_attributes('docid'), piece;
            else
                execute immediate t_create;
                execute immediate t_insert using docdb_write_attributes('doc_date'), docdb_write_attributes('docid'), piece;
            end if;
        end if;

        if docdb_write_attributes('out_default') = 'DIRECTORY' then
            utl_file.fflush(docdb_out_file);
            utl_file.fclose(docdb_out_file);
        end if;

    end actual_write;

    procedure aetp (
        elem                in                  varchar2
        , piece_name        in                  varchar2
        , seperate_by       in                  varchar2        default ','
        , enclose_elem      in                  varchar2        default null
    )

    as

        add_elem            clob := elem;

    begin

        if docdb_pieces.exists(elem) then
            add_elem := docdb_pieces(elem);
        end if;

        if add_elem is not null  or length(add_elem) > 0 then
            if docdb_pieces(piece_name) is null then
                if enclose_elem is null then
                    docdb_pieces(piece_name) := add_elem;
                else
                    docdb_pieces(piece_name) := substr(enclose_elem, 1, 1) || add_elem || substr(enclose_elem, 2, 1);
                end if;
            else
                if enclose_elem is null then
                    docdb_pieces(piece_name) := docdb_pieces(piece_name) || seperate_by || add_elem;
                else
                    docdb_pieces(piece_name) := docdb_pieces(piece_name) || seperate_by || substr(enclose_elem, 1, 1) || add_elem || substr(enclose_elem, 2, 1);
                end if;
            end if;
        else
            -- We take the existing piece if it exists and enclose it
            if docdb_pieces.exists(piece_name) then
                docdb_pieces(piece_name) := substr(enclose_elem, 1, 1) || docdb_pieces(piece_name) || substr(enclose_elem, 2, 1);
            end if;
        end if;

    end aetp;

    procedure cp (
        piece_name          in                  varchar2
        , with_temp_piece   in                  boolean default true
    )

    as

    begin

        docdb_pieces(piece_name) := null;
        if with_temp_piece then
           docdb_pieces(piece_name || '_temp') := null;
        end if;

    end cp;

    procedure atp (
        piece_name          in                  varchar2
        , piece_to_append   in                  varchar2
        , with_newline      in                  boolean default false
    )

    as

    begin

        if with_newline then
            docdb_pieces(piece_name) := docdb_pieces(piece_name) || chr(10) || docdb_pieces(piece_to_append);
        else
           docdb_pieces(piece_name) := docdb_pieces(piece_name) || docdb_pieces(piece_to_append);
        end if;

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

    procedure pstp (
        piece_name          in                  varchar2
        , content           in                  clob
        , to_temp           in                  boolean default false
    )

    as

    begin

        if to_temp then
            docdb_pieces(piece_name || '_temp') :=  content || docdb_pieces(piece_name || '_temp');
        else
            docdb_pieces(piece_name) := content || docdb_pieces(piece_name);
        end if;

    end pstp;

    procedure rp (
        piece_name          in                  varchar2
    )

    as

    begin

        docdb_pieces(piece_name) := null;
        if docdb_pieces.exists(piece_name || '_temp') then
            docdb_pieces(piece_name || '_temp') := null;
        end if;

    end rp;

    procedure write_ember (
        parser              in out nocopy       docdb_parse.parse_type
    )

    as

        ember_attrib_counter    number := 1;

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
        cp('attribute_list', false);

        -- Loop over packages
        pkg_idx := parser.packages.first;
        while pkg_idx is not null loop
            aetp(pkg_idx, 'package_list');

            -- Loop over programs in packages
            prg_idx := parser.packages(pkg_idx).programs.first;
            while prg_idx is not null loop
                aetp(prg_idx, 'program_list');

                -- Loop over all parameters
                par_idx := parser.packages(pkg_idx).programs(prg_idx).parameters.first;
                while par_idx is not null loop
                    aetp(par_idx, 'parameter_list');

                    tp('parameters', '
                        id: ' || par_idx || ',
                        paramName: ''' || parser.packages(pkg_idx).programs(prg_idx).parameters(par_idx).parameter_name || ''',
                        paramType: ''' || parser.packages(pkg_idx).programs(prg_idx).parameters(par_idx).parameter_type || ''',
                        paramDescription: ''' || parser.packages(pkg_idx).programs(prg_idx).parameters(par_idx).parameter_description || ''',
                        paramDefaultValue: ''' || parser.packages(pkg_idx).programs(prg_idx).parameters(par_idx).parameter_default_value || ''',
                        paramProgram: ' || prg_idx || '
                    ', true);
                    aetp(null, 'parameters_temp', null, '{}');
                    aetp('parameters_temp', 'parameters');
                    
                    par_idx := parser.packages(pkg_idx).programs(prg_idx).parameters.next(par_idx);
                end loop;
                aetp(null, 'parameter_list', null, '[]');

                -- Loop over all attributes
                atr_idx := parser.packages(pkg_idx).programs(prg_idx).attributes.first;
                while atr_idx is not null loop
                    aetp(ember_attrib_counter, 'attribute_list');

                    tp('attributes', '
                        id: ' || ember_attrib_counter || ',
                        attribName: ''' || atr_idx || ''',
                        attribSet: true,
                        attribProgram_id: ' || prg_idx || '
                    ', true);
                    aetp(null, 'attributes_temp', null, '{}');
                    aetp('attributes_temp', 'attributes');

                    atr_idx := parser.packages(pkg_idx).programs(prg_idx).attributes.next(atr_idx);
                    ember_attrib_counter := ember_attrib_counter + 1;
                end loop;
                aetp(null, 'attribute_list', null, '[]');

                -- Create program record
                tp('programs', '
                    id: ' || prg_idx || ',
                    programName: ''' || parser.packages(pkg_idx).programs(prg_idx).program_name || ''',
                    programType: ''' || (case parser.packages(pkg_idx).programs(prg_idx).is_function when true then 'FUNCTION' else 'PROCEDURE' end) || ''',
                    programDescription: ''' || parser.packages(pkg_idx).programs(prg_idx).description || ''',
                    programAuthor: ''' || parser.packages(pkg_idx).programs(prg_idx).author || ''',
                    programReturn: ''' || parser.packages(pkg_idx).programs(prg_idx).return_description || ''',
                    programReturnType: ''' || parser.packages(pkg_idx).programs(prg_idx).return_type || ''',
                    programParams_ids: '|| docdb_pieces('parameter_list') ||',
                    programAttrib_ids: '|| docdb_pieces('attribute_list') ||',
                    programPackage_id: ' || pkg_idx || '
                ', true);
                aetp(null, 'programs_temp', null, '{}');
                aetp('programs_temp', 'programs');

                prg_idx := parser.packages(pkg_idx).programs.next(prg_idx);
                rp('parameter_list');
                rp('attribute_list');
            end loop;
            aetp(null, 'program_list', null, '[]');

            -- Create package record
            tp('packages', '
                id: '|| pkg_idx || ',
                packageOwner: ''' || parser.packages(pkg_idx).package_owner || ''',
                packageName: ''' || parser.packages(pkg_idx).package_name || ''',
                description: ''' || parser.packages(pkg_idx).description || ''',
                project: ''' || parser.packages(pkg_idx).project || ''',
                author: ''' || parser.packages(pkg_idx).author || ''',
                version: ''' || parser.packages(pkg_idx).version || ''',
                programs_ids: ' || docdb_pieces('program_list') || ',
                doc: ' || parser.parse_id || '
            ', true);
            aetp(null, 'packages_temp', null, '{}');
            aetp('packages_temp', 'packages');

            pkg_idx := parser.packages.next(pkg_idx);
            rp('program_list');
        end loop;
        aetp(null, 'package_list', null, '[]');

        -- Complete attribute piece
        aetp(null, 'attributes', null, '[]');
        pstp('attributes', 'Docapp.Attrib.FIXTURES = ');
        astp('attributes', ';');

        -- Complete parameter piece
        aetp(null, 'parameters', null, '[]');
        pstp('parameters', 'Docapp.Parameter.FIXTURES = ');
        astp('parameters', ';');

        -- Complete program piece
        aetp(null, 'programs', null, '[]');
        pstp('programs', 'Docapp.Program.FIXTURES = ');
        astp('programs', ';');

        -- Complete package piece
        aetp(null, 'packages', null, '[]');
        pstp('packages', 'Docapp.Package.FIXTURES = ');
        astp('packages', ';');
        
        -- Finish main piece
        tp('main', 'Docapp.Completedoc.FIXTURES = [{
            id: ' || parser.parse_id || ',
            docname: ''' || parser.run_name || ''',
            docgenerated: ''' || to_char(parser.run_date_start, 'DD Mon YYYY') || ''',
            packages_ids: ');
        atp('main', 'package_list');
        astp('main', ',
            standalone_ids: []
        }];');

        atp('final', 'main', true);
        atp('final', 'packages', true);
        atp('final', 'programs', true);
        atp('final', 'parameters', true);
        atp('final', 'attributes', true);

        actual_write(docdb_pieces('final'));

    end write_ember;

    procedure write_angular_new (
        parser              in out nocopy       docdb_parse.parse_type
    )

    as

        anuglar_program_counter     number := 1;
        angular_attrib_counter      number := 1;
        angular_param_counter       number := 1;
        p_list                      json_list := json_list();
        
        pkg_temp                    json;
        prg_list                    json_list;
        prg_temp                    json;
        prg_counts_temp             json;
        prg_attr_list               json_list;
        prg_attr_temp               json;
        prg_parm_list               json_list;
        prg_parm_temp               json;
        full_json                   json := json();

        docdb_clob_write            clob := empty_clob;

    begin

        pkg_idx := parser.packages.first;
        while pkg_idx is not null loop
            -- Initialize package json
            -- Add package metadata
            pkg_temp := json();
            pkg_temp.put('id', pkg_idx);
            pkg_temp.put('packageOwner', parser.packages(pkg_idx).package_owner);
            pkg_temp.put('packageName', parser.packages(pkg_idx).package_name);
            pkg_temp.put('description', parser.packages(pkg_idx).description);
            pkg_temp.put('project', parser.packages(pkg_idx).project);
            pkg_temp.put('author', parser.packages(pkg_idx).author);
            pkg_temp.put('version', parser.packages(pkg_idx).version);

            -- Initialize program json list, and add programs
            prg_list := json_list();
            prg_idx := parser.packages(pkg_idx).programs.first;
            while prg_idx is not null loop
                -- Initialize program json
                -- Add program metadata
                prg_temp := json();
                prg_counts_temp := json();
                prg_temp.put('id', anuglar_program_counter);
                prg_temp.put('programName', parser.packages(pkg_idx).programs(prg_idx).program_name);
                prg_temp.put('programType', (case parser.packages(pkg_idx).programs(prg_idx).is_function when true then 'FUNCTION' else 'PROCEDURE' end));
                prg_temp.put('programDescription', parser.packages(pkg_idx).programs(prg_idx).description);
                prg_temp.put('programAuthor', parser.packages(pkg_idx).programs(prg_idx).author);
                prg_temp.put('programReturn', parser.packages(pkg_idx).programs(prg_idx).return_description);

                -- Add counts metadata
                prg_counts_temp.put('totalCodeLines', parser.packages(pkg_idx).programs(prg_idx).line_type_counts.lines_of_code);
                prg_counts_temp.put('totalCommentLines', parser.packages(pkg_idx).programs(prg_idx).line_type_counts.comment_lines);
                prg_counts_temp.put('totalDmlLines', parser.packages(pkg_idx).programs(prg_idx).line_type_counts.dml_lines);
                prg_counts_temp.put('totalTransactionLines', parser.packages(pkg_idx).programs(prg_idx).line_type_counts.transaction_lines);
                prg_temp.put('programLineCounts', prg_counts_temp);

                -- Initialize program attribute json list and add attributes
                prg_attr_list := json_list();
                atr_idx := parser.packages(pkg_idx).programs(prg_idx).attributes.first;
                while atr_idx is not null loop
                    -- initialize attribute json
                    prg_attr_temp := json();
                    prg_attr_temp.put('id', angular_attrib_counter);
                    prg_attr_temp.put('attribName', atr_idx);
                    prg_attr_temp.put('attribSet', true);

                    atr_idx := parser.packages(pkg_idx).programs(prg_idx).attributes.next(atr_idx);
                    angular_attrib_counter := angular_attrib_counter + 1;
                    -- Add the attribute to the attribute list
                    prg_attr_list.append(prg_attr_temp.to_json_value);
                end loop;

                -- Add all attributes metadata
                prg_temp.put('programAttributes', prg_attr_list);

                -- Initialize program parameter json list and add parameters
                prg_parm_list := json_list();
                par_idx := parser.packages(pkg_idx).programs(prg_idx).parameters.first;
                while par_idx is not null loop
                    -- Initialize parameter json
                    prg_parm_temp := json();
                    prg_parm_temp.put('id', angular_param_counter);
                    prg_parm_temp.put('paramName', parser.packages(pkg_idx).programs(prg_idx).parameters(par_idx).parameter_name);
                    prg_parm_temp.put('paramType', parser.packages(pkg_idx).programs(prg_idx).parameters(par_idx).parameter_type);
                    prg_parm_temp.put('paramDescription', parser.packages(pkg_idx).programs(prg_idx).parameters(par_idx).parameter_description);
                    prg_parm_temp.put('paramDefaultValue', parser.packages(pkg_idx).programs(prg_idx).parameters(par_idx).parameter_default_value);

                    par_idx := parser.packages(pkg_idx).programs(prg_idx).parameters.next(par_idx);
                    angular_param_counter := angular_param_counter + 1;
                    prg_parm_list.append(prg_parm_temp.to_json_value);
                end loop;

                -- Add all parameters metadata
                prg_temp.put('programParameters', prg_parm_list);

                -- Add the program to the program list for the package
                prg_list.append(prg_temp.to_json_value);
                prg_idx := parser.packages(pkg_idx).programs.next(prg_idx);
                anuglar_program_counter := anuglar_program_counter + 1;
            end loop;

            -- Add all programs to package metadata
            pkg_temp.put('programs', prg_list);

            -- Now we are done with this package. Add it to the final list
            p_list.append(pkg_temp.to_json_value);
            pkg_idx := parser.packages.next(pkg_idx);
        end loop;

        full_json.put('docname', parser.run_name);
        full_json.put('docgenerated', to_char(parser.run_date_start, 'DD Mon YYYY'));
        full_json.put('packagelist', p_list);

        docdb_data.put('sharedObject', full_json);

        dbms_lob.createtemporary(docdb_clob_write, true);
        dbms_lob.open(docdb_clob_write, dbms_lob.lob_readwrite);
        docdb_data.to_clob(docdb_clob_write, true);
        dbms_lob.close(docdb_clob_write);

        actual_write(docdb_clob_write);

    end write_angular_new;

    procedure write_angular (
        parser              in out nocopy       docdb_parse.parse_type
    )

    as

        angular_attrib_counter      number := 1;

    begin

        cp('main', false);
        cp('packages');
        cp('programs');
        cp('parameters');
        cp('attributes');
        cp('linecounts');

        -- Lets loop through packages
        pkg_idx := parser.packages.first;
        while pkg_idx is not null loop
            -- Loop over programs and build the programs record
            prg_idx := parser.packages(pkg_idx).programs.first;
            while prg_idx is not null loop

                -- Loop over all attributes
                atr_idx := parser.packages(pkg_idx).programs(prg_idx).attributes.first;
                while atr_idx is not null loop

                    tp('attributes', '
                        "id": ' || angular_attrib_counter || ',
                        "attribName": "' || atr_idx || '",
                        "attribSet": true
                    ', true);
                    aetp(null, 'attributes_temp', null, '{}');
                    aetp('attributes_temp', 'attributes');

                    atr_idx := parser.packages(pkg_idx).programs(prg_idx).attributes.next(atr_idx);
                    angular_attrib_counter := angular_attrib_counter + 1;
                end loop;
                aetp(null, 'attributes', null, '[]');

                -- Loop over parameters and create the parameters record list
                par_idx := parser.packages(pkg_idx).programs(prg_idx).parameters.first;
                while par_idx is not null loop

                    tp('parameters', '
                        "id": ' || par_idx || ',
                        "paramName": "' || parser.packages(pkg_idx).programs(prg_idx).parameters(par_idx).parameter_name || '",
                        "paramType": "' || parser.packages(pkg_idx).programs(prg_idx).parameters(par_idx).parameter_type || '",
                        "paramDescription": "' || parser.packages(pkg_idx).programs(prg_idx).parameters(par_idx).parameter_description || '",
                        "paramDefaultValue": "' || parser.packages(pkg_idx).programs(prg_idx).parameters(par_idx).parameter_default_value || '"
                    ', true);
                    aetp(null, 'parameters_temp', null, '{}');
                    aetp('parameters_temp', 'parameters');
                    
                    par_idx := parser.packages(pkg_idx).programs(prg_idx).parameters.next(par_idx);
                end loop;
                aetp(null, 'parameters', null, '[]');

                -- Create the linecount record
                tp('linecounts', '
                    "totalCodeLines": '|| parser.packages(pkg_idx).programs(prg_idx).line_type_counts.lines_of_code || ',
                    "totalCommentLines": '|| parser.packages(pkg_idx).programs(prg_idx).line_type_counts.comment_lines || ',
                    "totalDmlLines": '|| parser.packages(pkg_idx).programs(prg_idx).line_type_counts.dml_lines || ',
                    "totalTransactionLines": '|| parser.packages(pkg_idx).programs(prg_idx).line_type_counts.transaction_lines || '
                ');
                aetp(null, 'linecounts', null, '{}');

                -- Create the individual program record
                tp('programs', '
                    "id": "'|| prg_idx ||'",
                    "programName": "' || parser.packages(pkg_idx).programs(prg_idx).program_name || '",
                    "programType": "' || (case parser.packages(pkg_idx).programs(prg_idx).is_function when true then 'FUNCTION' else 'PROCEDURE' end) || '",
                    "programDescription": "' || parser.packages(pkg_idx).programs(prg_idx).description || '",
                    "programAuthor": "' || parser.packages(pkg_idx).programs(prg_idx).author || '",
                    "programReturn": "' || parser.packages(pkg_idx).programs(prg_idx).return_description || '",
                    "programReturnType": "' || parser.packages(pkg_idx).programs(prg_idx).return_type || '",
                    "programParameters": '|| docdb_pieces('parameters') || ',
                    "programAttributes": '|| docdb_pieces('attributes') || ',
                    "programLineCounts": '|| docdb_pieces('linecounts') || '
                ', true);
                aetp(null, 'programs_temp', null, '{}');
                aetp('programs_temp', 'programs');
                
                prg_idx := parser.packages(pkg_idx).programs.next(prg_idx);
                rp('parameters');
                rp('attributes');
            end loop;
            aetp(null, 'programs', null, '[]');

            -- Create the individual package record
            tp('packages', '
                "id": '|| pkg_idx || ',
                "packageOwner": "' || parser.packages(pkg_idx).package_owner || '",
                "packageName": "' || parser.packages(pkg_idx).package_name || '",
                "description": "' || parser.packages(pkg_idx).description || '",
                "project": "' || parser.packages(pkg_idx).project || '",
                "author": "' || parser.packages(pkg_idx).author || '",
                "version": "' || parser.packages(pkg_idx).version || '",
                "programs": '|| docdb_pieces('programs') || '
            ', true);
            aetp(null, 'packages_temp', null, '{}');
            aetp('packages_temp', 'packages');

            pkg_idx := parser.packages.next(pkg_idx);
            rp('programs');
        end loop;
        aetp(null, 'packages', null, '[]');

        tp('main', 
            '"docname": "' || parser.run_name || '",
            "docgenerated": "' || to_char(parser.run_date_start, 'DD Mon YYYY') || '",
            "packagelist": ');
        atp('main', 'packages');
        aetp(null, 'main', null, '{}');

        pstp('main', 'docdbControllers.factory("docdbDataFac", function(){
                return { sharedObject: ');
        astp('main', '};   
                });');

        atp('final', 'main', true);

        actual_write(docdb_pieces('final'));

    end write_angular;

    procedure write_dump (
        parser              in out nocopy       docdb_parse.parse_type
    )

    as

    begin

        actual_write(docdb_pieces('final'));

    end write_dump;

    procedure write_doc (
        parser              in out nocopy       docdb_parse.parse_type
    )

    as

        settings_idx        varchar2(250);

    begin

        -- Set parms from parser
        docdb_write_attributes('docid') := parser.run_id;
        docdb_write_attributes('parseid') := parser.parse_id;
        docdb_write_attributes('doc_date') := parser.run_date_start;

        -- Overwrite settings defined by the user
        settings_idx := parser.info.settings.first;
        while settings_idx is not null loop
            docdb_write_attributes(settings_idx) := parser.info.settings(settings_idx);
            settings_idx := parser.info.settings.next(settings_idx);
        end loop;

        case docdb_write_attributes('out_default_format')
            when 'EMBER' then
                write_ember(parser);
            when 'ANGULAR' then
                write_angular_new(parser);
            when 'DUMP' then
                write_dump(parser);
        end case;

        commit;

        -- Once written - Reset all write contents
        rp('main');
        rp('packages');
        rp('programs');
        rp('parameters');
        rp('attributes');
        rp('package_list');
        rp('program_list');
        rp('parameter_list');
        rp('attribute_list');
        rp('final');

    end write_doc;

    procedure set_write_attribute (
        attribute_name      in                  varchar2
        , attribute_value   in                  varchar2
    )

    as

    begin

        docdb_write_attributes(attribute_name) := attribute_value;

    end set_write_attribute;

begin

    -- Set package defaults
    docdb_write_attributes('out_default')           := 'TABLE';
    docdb_write_attributes('out_default_val')       := 'DOCDB_OUTPUT';
    docdb_write_attributes('out_default_format')    := 'ANGULAR';
    docdb_write_attributes('docdb_file_name')       := 'docdb_controller_data.js';

    -- Make sure final piece exists
    docdb_pieces('final') := '';

end docdb_write;
/