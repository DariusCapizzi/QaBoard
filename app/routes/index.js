import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
    });
  },
  _saveQuestion(params){

    var newQuestion = this.store.createRecord('question', params);
    newQuestion.save();

    this.transitionTo('question', newQuestion.id);
  },
  actions: {
    saveQuestion(params){
      this._saveQuestion(params)
    }
  }
});
