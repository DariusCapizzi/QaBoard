import Ember from 'ember';

export function makeDramatic(params/*, hash*/) {
  return Ember.String.htmlSafe(`<span>${params[0]} . . .</span>`);
}

export default Ember.Helper.helper(makeDramatic);
