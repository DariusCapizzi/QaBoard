import Ember from 'ember';

export default Ember.Component.extend({
  isShowForm: false,
  isReplyForm: false,
  _toggleForm: function(){
    this.set("isShowForm", !this.isShowForm)
  },
  _toggleReplyForm: function(){
    this.set("isReplyForm", !this.isReplyForm)
  },
  actions: {
    destroyAnswer() {
      if (!parseInt(this.answer.id)) {
        this.answer.destroyRecord();
      }
    },
    showForm(){
      this._toggleForm()
    },
    showReplyForm(){
      this._toggleReplyForm()
    },
    updateContent(){
      this.answer.set('content', this.get('content'));
      this.answer.save();
      // this.transitionTo('answer', this.answer.id);
    },
    updateAuthor(){
      this.answer.set('author', this.get('author'));
      this.answer.save();
      // this.transitionTo('answer', this.answer.id);
    },
    sendReply(params){
      this.sendAction('sendAnswer', params);
    }
  }
});
