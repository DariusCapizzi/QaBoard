import Ember from 'ember';

export default Ember.Component.extend({
  isShowForm: Ember.computed.or('isReplyForm','isNewForm'),
  isNewForm: false,
  isReplyForm: false,
  _toggleForm: function(){

    this.set("isNewForm", !this.isNewForm);

    this.set("isReplyForm", !this.isReplyForm);
  },
  _submitAnswer(){
    var params
    if(this.get('isNewForm')){
      params = {
        author: this.get('author'),
        content: this.get('content'),
        question: this.get('question')
      };
    } else if (this.get('isReplyForm')) {
      params = {
        author: this.get('author'),
        content: this.get('content'),
        question: this.get('question'),
        parentAnswer: this.get('answer')
      };
    }
    console.log(params);
    this._toggleForm();
    this.set('author', '');
    this.set('content', '');
    this.sendAction('sendAnswer', params);
  },
  actions: {
    showForm(){
      this._toggleForm()
    },
    submitAnswer(){
      //if parentAnswer exists
      this._submitAnswer()
    }
  }
});
