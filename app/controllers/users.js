import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
  actions: {
    login(user){
      this.get("session").login(user)
      this.transitionToRoute("todos")
    }
  }
});
