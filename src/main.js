import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap';
import "jquery"
window.$ = window.jQuery = require('jquery');
import 'jquery.easing';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
