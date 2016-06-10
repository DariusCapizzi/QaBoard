import Ember from 'ember';

export default Ember.Component.extend({
  isShowForm: false,
  _toggleForm: function(){
    this.set("isShowForm", !this.isShowForm)
  },
  actions: {
    destroyQuestion() {
      if (!parseInt(this.question.id)) {
        this.question.destroyRecord();
      }
    },
    showForm(){
      this._toggleForm()
    },
    updateContent(){
      this.question.set('content', this.get('content'));
      this.question.save();
      // this.transitionTo('question', this.question.id);
    },
    updateAuthor(){
      this.question.set('author', this.get('author'));
      this.question.save();
      // this.transitionTo('question', this.question.id);
    },
    updateNotes(){
      this.question.set('notes', this.get('notes'));
      this.question.save();
      // this.transitionTo('question', this.question.id);
    }
  }
});
