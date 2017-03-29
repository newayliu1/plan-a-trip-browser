import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    editTrip(trip) {
      trip.save()
      .then(() => this.transitionTo('trips'));
    },
    cancel () {
      history.back();
    },
  }
});
