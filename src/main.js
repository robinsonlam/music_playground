// Dependencies
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import SC from 'soundcloud';

var $ = window.$ = require('jquery');

Vue.use(VueRouter);
Vue.use(VueResource);

// Vue Components
import App from './App';
import Landing from './pages/Landing';

// Soundcloud
SC.initialize({
  client_id: 'f699562bbc9a61ec0f6e8e0ef82c8cff',
  redirect_uri: 'http://localhost:8080'
});

// Router
var router = new VueRouter();

router.map({
  '/': {
    component: Landing
  }
});

router.beforeEach(function () {
  window.scrollTo(0, 0)
});

$(document).ready(function() {
	router.start(App, '#app');
});