import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  timeSpend: DS.attr('number'),
  notes: DS.attr('string'),
  trip: DS.belongsTo('trip'),
});
