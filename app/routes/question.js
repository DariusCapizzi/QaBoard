import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
   return this.store.findRecord('question', params.question_id);
  },
  _saveAnswer(params){
    var newAnswer = this.store.createRecord('answer', params);
    var question = params.question;
    question.get('answers').addObject(newAnswer);
    newAnswer.save().then(function(){
      return question.save();
    });
    this.transitionTo('question', question.id);
    // this.transitionTo('index'); //maybe to the question page?
  },
  actions: {
    saveAnswer(params){
      this._saveAnswer(params)
    }
  }
});
