import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
   return this.store.findRecord('question', params.question_id);
  },
  _saveAnswer(params){
    var newAnswer = this.store.createRecord('answer', params);
    var question = params.question;
    console.log(question);

    question.get('answers').addObject(newAnswer);
    // question.get('answers')then(function(value) {
    //   value.addObject(newAnswer);
    // }

    if(params.parentAnswer !== undefined){
      params.parentAnswer.get('replies').addObject(newAnswer)
    }

    newAnswer.save().then(function(){
      return question.save();
    });
  },
  actions: {
    saveAnswer(params){
      this._saveAnswer(params)
    },
    goHome(){
      this.transitionTo('index');
    }
  }
});
