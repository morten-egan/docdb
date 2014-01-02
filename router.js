Docapp.Router.map(function () {
  this.resource('docapp', { path: '/' });
});

Docapp.DocappRoute = Ember.Route.extend({
  activate: function() {
        $(document).attr('title', 'DOCDB');
    },
  model: function () {
    return this.store.find('completedoc', 1);
  }
});
