import Ember from 'ember';

export default Ember.Service.extend({
  events: [],

  add(event) {
    this.get('events').pushObject(event);
  }
});
