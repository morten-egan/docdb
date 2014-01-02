Docapp.DocappController = Ember.ObjectController.extend({
  remaining: function() { return 0 },
  actions: {
    searchCompletedoc: function () {
      // Get the search query from input
      var query = this.get('searchQuery');
      if (!query.trim()) { return; };

      alert('Filter based on: ' + query);

      // Clear the "New Todo" text field
      this.set('searchQuery', '');
    }
  }
});