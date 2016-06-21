import Ember from 'ember';

export default Ember.Component.extend({
  isShowForm: false,
  _toggleForm: function(){
    this.set("isShowForm", !this.isShowForm)
  },
  _submitQuestion(){
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
