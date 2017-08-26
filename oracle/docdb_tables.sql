REM Create the supporting tables for DocDB

create table docdb_resources (
	resource_name			varchar2(250)		constraint res_name_pk primary key,
	resource_version		varchar2(50)		constraint res_ver_nn not null,
	resource_content		clob
);