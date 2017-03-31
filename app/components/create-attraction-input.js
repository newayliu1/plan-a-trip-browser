import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.set('newItem', {timeSpend: 120});
  },
  actions: {
    save() {
      let data = this.get('newItem');
      data.trip = this.get('trip');
      this.sendAction('save', data);
      this.set('newItem.name', '');
      this.set('newItem.address', '');
      this.set('newItem.notes', '');
      this.set('newItem.timeSpend', 120);
    },
    cancel() {
      this.sendAction('cancel');
      this.set('newItem.name', '');
      this.set('newItem.address', '');
      this.set('newItem.notes', '');
      this.set('newItem.timeSpend', 120);
    },
  }
});
