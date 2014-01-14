Docapp.DocappController = Ember.ObjectController.extend({
  remaining: function() {
    var x = this.store.find('completedoc');
    if (x.isLoaded = true ) {
      return x.get("length")
    } else {
      return 42
    }
  }.property('remaining'),
  actions: {
    searchCompletedoc: function () {
      // Get the search query from input
      var query = this.get('searchQuery');
      if (!query.trim()) { return; };

      var x = this.store.find('package');
      

      // Clear the "New Todo" text field
      this.set('searchQuery', '');
    }
  }
});