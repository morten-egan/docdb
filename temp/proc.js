Procdoc.Proc = DS.Model.extend({
	procName: DS.attr('string')
	, doesCommit: DS.attr('boolean')
});

Procdoc.Proc.FIXTURES = [
 {
   id: 1,
   procName: 'send_email',
   doesCommit: true
 },
 {
   id: 2,
   procName: 'send_sms',
   doesCommit: false
 },
 {
   id: 3,
   procName: 'get_customer_email',
   doesCommit: false
 }
];