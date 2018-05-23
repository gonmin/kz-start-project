// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vconsole from 'vconsole'
import App from './App'

Vue.config.productionTip = false

var vConsoleInstance = new Vconsole();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
