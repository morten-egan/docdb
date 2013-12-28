Procdoc.ProcdocController = Ember.ArrayController.extend({
  actions: {
    searchProc: function () {
      // Get the todo title set by the "New Todo" text field
      var squery = this.get('searchQuery');
      if (!squery.trim()) { return; }

      // Create the new Todo model
      var proc = this.store.createRecord('proc', {
        procName: squery,
        doesCommit: false
      });

      // Clear the "New Todo" text field
      this.set('searchQuery', '');

      // Save the new model
      proc.save();
    }
  }
});