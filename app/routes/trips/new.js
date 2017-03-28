import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').createRecord('trip', {});
  },
  actions: {
    createTrip(trip) {
      trip.save()
        .then(() => this.transitionTo('trips'));
    },
    cancel () {
      history.back();
    },
  },
});
