import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createAttraction(data) {
      let attraction = this.get('store').createRecord('attraction', data);
      attraction.save()
        .then(() => this.transitionTo('trip'));
    },
    cancel () {
      history.back();
    },
  },
});
