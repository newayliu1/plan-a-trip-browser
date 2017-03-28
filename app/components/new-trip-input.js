import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      this.sendAction('save', this.get('trip'));
    },
    cancel() {
      this.get('trip').rollbackAttributes();
      this.sendAction('cancel');
    },
  },
});
