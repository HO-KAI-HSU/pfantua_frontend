import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './plugins/api'
import './plugins/validate'
import './plugins/datetimepicker'
import './plugins/filter'
import './plugins/utils'
import './plugins/directive'
import user from './plugins/user'
import VueMeta from 'vue-meta';
import VueScrollTo from 'vue-scrollto';

let scrollOptions = {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: -50,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
};    

window.$api = api;
Vue.prototype.$api = api;
Vue.prototype.$user = user;


Vue.config.productionTip = false;

Vue.use(VueMeta);

Vue.use(VueScrollTo, scrollOptions);

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
      document.title = to.meta.title
  }
  next();
})

router.afterEach((to, from, next) => {
  window.gtag('config', 'UA-131083018-1', {
    page_path: window.location.href,
    page_location: to.fullPath
  })
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')