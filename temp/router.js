Procdoc.Router.map(function () {
  this.resource('procdoc', { path: '/' }, function () {
    // additional child routes
  });
});

Procdoc.ProcdocRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('proc');
  }
});

Procdoc.ProcdocIndexRoute = Ember.Route.extend({
  model: function () {
    return this.modelFor('procdoc');
  }
});