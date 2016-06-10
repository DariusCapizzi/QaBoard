import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
    });
  },
  _saveQuestion(params){
    // console.log(params)
    var newQuestion = this.store.createRecord('question', params);
    newQuestion.save();

    // this.transitionTo('index'); //maybe to the question page?
  },
  actions: {
    saveQuestion(params){
      this._saveQuestion(params)
    }
  }
});
