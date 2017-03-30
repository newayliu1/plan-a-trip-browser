import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(){
      return this.sendAction('delete', this.get('trip'));
    },
    edit() {
      this.sendAction('edit', this.get('trip'));
    },
  },
  afterSomeEvent: function() {
  this.flashMessage({
    type: 'warning',
    action: 'delete', // Run when message is
    content: '<strong>Click here</strong> to cancel', // Pass HTML
    duration: 5000, // Milliseconds to show the message for
  });
},
});
