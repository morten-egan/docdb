Procdoc.ProcdocController = Ember.ArrayController.extend({
  actions: {
    searchProc: function () {
      // Get the todo title set by the "New Todo" text field
      var squery = this.get('searchQuery');
      if (!squery.trim()) { return; }

      // Create the new Todo model
      var proc = this.store.createRecord('proc', {
        procName: squery,
        doesCommit: false,
        isHidden: false,
        project: 'DB Ping',
        author: 'Morten Egan',
        revision: '1.04.3'
      });

      // Clear the "New Todo" text field
      this.set('searchQuery', '');

      // Save the new model
      proc.save();
    }
  }
});