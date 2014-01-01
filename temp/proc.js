Procdoc.Proc = DS.Model.extend({
	procName: DS.attr('string')
	, doesCommit: DS.attr('boolean')
	, isHidden: DS.attr('boolean')
	, project: DS.attr('string')
	, author: DS.attr('string')
	, revision: DS.attr('string')
});

Procdoc.Proc.FIXTURES = [
 {
   id: 1,
   procName: 'PING_COMMUNICATIONS',
   doesCommit: true,
   isHidden: false,
   project: 'DB Ping',
   author: 'Morten Egan',
   revision: '1.04.3'
 },
 {
   id: 2,
   procName: 'PING_PAYPAL',
   doesCommit: false,
   isHidden: false,
   project: 'DB Ping',
   author: 'Morten Egan',
   revision: '0.22'
 },
 {
   id: 3,
   procName: 'PING_DB_SETTINGS',
   doesCommit: false,
   isHidden: false,
   project: 'DB Ping',
   author: 'Morten Egan',
   revision: '2.3'
 }
];