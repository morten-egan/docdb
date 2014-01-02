Docapp.Router.map(function () {
  this.resource('docapp', { path: '/' }, function () {
  	// Additional child routes
  	this.route('pkgdetail', { path: '/package/:id' });
  });
});

Docapp.DocappRoute = Ember.Route.extend({
  activate: function() {
        $(document).attr('title', 'DOCDB');
    },
  model: function () {
    return this.store.find('completedoc', 1);
  }
});

Docapp.DocappIndexRoute = Ember.Route.extend({
  model: function () {
    return this.modelFor('docapp');
  }
});

Docapp.DocappPkgdetailRoute = Ember.Route.extend({
  model: function(params){
    return this.store.find('package', params.id);
  },
  renderTemplate: function(controller){
    this.render('docapp/pkgdetail', {controller: controller});
  }
});