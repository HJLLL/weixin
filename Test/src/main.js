// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import store from './store'
import './assets/css/iconfont.css'
import './assets/css/public.scss'
import $ from 'jquery'
import VueResource from 'vue-resource'


Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
