import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  /* this.route('todo', { path: '/'}, function() {
    this.route('complete');
    this.route('incomplete');
  }); */
  this.route('login');
  this.route('users');
  this.route('todos',{ path: '/'}, function() {
    this.route('complete');
    this.route('incomplete');
  });
  
});

export default Router;
