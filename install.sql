create user docdb identified by change_this_password;

grant create table to docdb;
grant create procedure to docdb;
grant create synonym to docdb;
grant create public synonym to docdb;

@@docdb_parse.pks
@@docdb_tools.pks
@@docdb_write.pks
@@docdb_parse.pkb
@@docdb_tools.pkb
@@docdb_write.pkb

