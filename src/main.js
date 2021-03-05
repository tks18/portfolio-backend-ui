import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import state from '@/plugins/state';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;
Vue.prototype.$state = state;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
