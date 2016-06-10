import Ember from 'ember';

export default Ember.Component.extend({
  isShowForm: false,
  _toggleForm: function(){
    console.log(this.question);
    this.set("isShowForm", !this.isShowForm)
  },
  _submitAnswer(){
    var params = {
      author: this.get('author'),
      content: this.get('content'),
      question: this.get("question")
    };
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
      this._submitAnswer()
    }
  }
});
