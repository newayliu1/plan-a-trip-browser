import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  actions: {
    editAttraction(attraction) {
      attraction.save()
      .then(() => this.transitionTo('trip'))
      .catch(() => {
        this.get('flashMessages')
        .danger('Needs to be numbers. Please try again.');
      });
    },
    cancel () {
      history.back();
    },
  }
});
