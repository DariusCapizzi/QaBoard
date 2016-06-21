import Ember from 'ember';

export default Ember.Component.extend({
  isShowForm: false,
  history: Ember.inject.service(),
  _toggleForm: function(){
    this.set("isShowForm", !this.isShowForm)
  },
  _submitQuestion(){
   this.get("history").add("New question: " + this.get('content'));
   var params = {
      author: this.get('author'),
      content: this.get('content'),
      notes: this.get('notes')
    };
    this._toggleForm();
    this.set('author', '');
    this.set('content', '');
    this.set('notes', '');
    this.sendAction('sendQuestion', params);
  },

  actions: {
    showForm(){
      this._toggleForm()
    },
    submitQuestion(){
      this._submitQuestion()
    }
  }
});
