Docapp.Completedoc = DS.Model.extend({
	docname: DS.attr('string', {defaultValue: "DOCDB"})
	, docgenerated: DS.attr('string')
	, packages_ids: DS.hasMany('package', { async: true })
	, standalone_ids: DS.hasMany('program', { async: true })
});

Docapp.Package = DS.Model.extend({
	packageName: DS.attr('string')
	, description: DS.attr('string')
	, project: DS.attr('string', {defaultValue: null})
	, author: DS.attr('string')
	, version: DS.attr('string')
	, programs_ids: DS.hasMany('program', { async: true })
	, doc_id: DS.belongsTo('completedoc')
});

Docapp.Program = DS.Model.extend({
	programName: DS.attr('string')
	, programType: DS.attr('string')
	, programDescription: DS.attr('string')
	, programAuthor: DS.attr('string')
	, programReturn: DS.attr('string', {defaultValue: null})
	, programReturnType: DS.attr('string', {defaultValue: null})
	, programParams_ids: DS.hasMany('parameter', { async: true })
	, programAttrib_ids: DS.hasMany('attrib', { async: true })
	, programPackage_id: DS.belongsTo('package')
});

Docapp.Parameter = DS.Model.extend({
	paramName: DS.attr('string')
	, paramType: DS.attr('string')
	, paramDescription: DS.attr('string')
	, paramDefaultValue: DS.attr('string')
	, paramProgram_id: DS.belongsTo('program')
});

Docapp.Attrib = DS.Model.extend({
	attribName: DS.attr('string')
	, attribSet: DS.attr('boolean')
	, attribProgram_id: DS.belongsTo('program')
});