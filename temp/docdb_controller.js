function PackageListCtrl($scope) {
  $scope.packages = 
		{	'docname': 'DBPING',
		'docgenerated': 'Jan 01, 2013',
		"packagelist": [
			{
				'id': 1,
				'packageOwner': 'DOCDB',
				'packageName': 'DOCDB_PARSE',
				'description': 'This is a description',
				'project': 'A general project',
				'author': 'Morten Egan',
				'version': '1.0.0',
				'programs': [
					{
						'id': 23,
						'programName': 'FIX_PRO',
						'programType': 'FUNCTION',
						'programDescription': 'This is a program description',
						'programAuthor': 'Morten Egan',
						'programReturn': '',
						'programReturnType': 'BOOLEAN',
						'programParameters': [
							{
								'id': 25,
								'paramName': 'SET_TR_IN',
								'paramType': 'VARCHAR2',
								'paramDescription': 'This is a parameter description',
								'paramDefaultValue': ''
							},
							{
								'id': 27,
								'paramName': 'AWAY',
								'paramType': 'NUMBER',
								'paramDescription': 'This is a parameter description',
								'paramDefaultValue': ''
							}
						],
						'programAttributes': [
							{
								'id': 28,
								'attribName': 'Commit'
							}
						]
					}
				]
			}
		]
	};

  /* $scope.filterFn = function(pkgin) {
	if (pkgin.nested.n1 == 'hello') {
		return true;
	}

	return false;
	}; */
};