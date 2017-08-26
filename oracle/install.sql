prompt Creating supporting tables
@@docdb_tables.sql

prompt Installing pljson package
@@pljson/install.sql

prompt Installing DocDB packages
@@docdb_parse.pks
@@docdb_tools.pks
@@docdb_write.pks
@@docdb.pks
@@docdb_parse.pkb
@@docdb_tools.pkb
@@docdb_write.pkb
@@docdb.pkb

prompt Granting execute to public
grant execute on docdb to public;
create public synonym docdb for docdb;

prompt Loading resources to resource table
@@docdb_temp_create.sql &&1
set define off

begin
	t_res_load('2.0.0', 'bootstrap.min.css');
	t_res_load('2.0.0', 'raphael-min.js');
	t_res_load('2.0.0', 'jquery-2.0.3.min.js');
	t_res_load('2.0.0', 'docdb_controller.js');
	t_res_load('2.0.0', 'angular_app.js');
	t_res_load('2.0.0', 'pie.js');
	t_res_load('2.0.0', 'docdb_controller_2.js');
	t_res_load('2.0.0', 'angular.min.js');
	t_res_load('2.0.0', 'angular-route.js');
end;
/