// import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  replies: DS.hasMany('answer', {inverse: 'parentAnswer', async:true}),
  parentAnswer: DS.belongsTo('answer', {inverse: 'replies', async:true}),
  question: DS.belongsTo('question', {async:true})
});
