docApp.CompleteDoc = DS.Model.extend({
	docname: DS.attr('string', {defaultValue: "DOCDB"})
	, docgenerated: DS.attr('string')
	, packages: DS.hasMany('docApp.Package')
	, standalone: DS.hasMany('docApp.Program')
});

docApp.Package = DS.Model.extend({
	packageName: DS.attr('string')
	, description: DS.attr('string')
	, project: DS.attr('string', {defaultValue: null})
	, author: DS.attr('string')
	, version: DS.attr('string')
	, programs: DS.hasMany('docApp.Program')
	, doc: DS.belongsTo('docApp.CompleteDoc')
});

docApp.Program = DS.Model.extend({
	programName: DS.attr('string')
	, programType: DS.attr('string')
	, programDescription: DS.attr('string')
	, programAuthor: DS.attr('string')
	, programReturn: DS.attr('string', {defaultValue: null})
	, programReturnType: DS.attr('string', {defaultValue: null})
	, programParams: DS.hasMany('docApp.Parameter')
	, programPackage: DS.belongsTo('docApp.Package')
});

docApp.Parameter = DS.Model.extend({
	paramName: DS.attr('string')
	, paramType: DS.attr('string')
	, paramDescription: DS.attr('string')
	, paramDefaultValue: DS.attr('string')
	, paramProgram: DS.belongsTo('docApp.Program')
});