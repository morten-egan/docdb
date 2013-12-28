Procdoc.Router.map(function () {
  this.resource('procdoc', { path: '/' });
});

Procdoc.ProcdocRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('proc');
  }
});