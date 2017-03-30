import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  actions: {
    createAttraction(data) {
      let attraction = this.get('store').createRecord('attraction', data);
      attraction.save()
        .then(() => this.transitionTo('trip'))
        .catch(() => {
          attraction.destroyRecord();
          this.get('flashMessages')
          .danger('Attraction name and address can not be empty. And Time speed has to be numbers. Please try again.');
        });
    },
    cancel () {
      history.back();
    },
  },
});
