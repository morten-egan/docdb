create or replace package body docdb_write

as

    type attr_list is table of varchar2(4000) index by varchar2(200);
    docdb_write_attributes  attr_list;
    docdb_out_file          utl_file.file_type;

    pkg_idx             number;
    prg_idx             number;
    par_idx             number;
    atr_idx             varchar2(4000);
    dep_idx             number;

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

    procedure write_angular (
        parser              in out nocopy       docdb_parse.parse_type
    )

    as

        anuglar_program_counter     number := 1;
        angular_attrib_counter      number := 1;
        angular_param_counter       number := 1;
        angular_depen_counter       number := 1;
        p_list                      json_list := json_list();
        
        pkg_temp                    json;
        prg_list                    json_list;
        prg_temp                    json;
        prg_counts_temp             json;
        prg_attr_list               json_list;
        prg_attr_temp               json;
        prg_parm_list               json_list;
        prg_parm_temp               json;
        prg_dep_list                json_list;
        prg_dep_temp                json;
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

                -- Initialize program dependents json list
                prg_dep_list := json_list();
                dep_idx := parser.packages(pkg_idx).programs(prg_idx).dependents.first;
                while dep_idx is not null loop
                    -- initialize dependent json
                    prg_dep_temp := json();
                    prg_dep_temp.put('id', angular_depen_counter);
                    prg_dep_temp.put('dependentOwner', parser.packages(pkg_idx).programs(prg_idx).dependents(dep_idx).d_owner);
                    prg_dep_temp.put('dependentName', parser.packages(pkg_idx).programs(prg_idx).dependents(dep_idx).d_name);
                    prg_dep_temp.put('dependentType', parser.packages(pkg_idx).programs(prg_idx).dependents(dep_idx).d_type);

                    dep_idx := parser.packages(pkg_idx).programs(prg_idx).dependents.next(dep_idx);
                    angular_depen_counter := angular_depen_counter + 1;
                    prg_dep_list.append(prg_dep_temp.to_json_value);
                end loop;
                -- Add all dependents metadata
                prg_temp.put('programDependents', prg_dep_list);

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

    end write_angular;

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
            when 'ANGULAR' then
                write_angular(parser);
        end case;

        commit;

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

end docdb_write;
/