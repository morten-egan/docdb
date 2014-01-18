select
	*
from
	all_dependencies
where
	owner = 'OWNER'
and
	name = 'PACKAGE_NAME'
and
	type = 'PACKAGE BODY'
and
	referenced_owner = owner
order by
	referenced_type
	, referenced_owner;