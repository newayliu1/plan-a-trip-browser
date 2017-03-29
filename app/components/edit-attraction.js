import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      this.sendAction('save', this.get('attraction'));
    },
    cancel() {
      console.log('cancel');
      this.get('attraction').rollbackAttributes();
      this.sendAction('cancel');
    },
  }
});
