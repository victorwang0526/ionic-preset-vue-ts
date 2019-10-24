import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import { defineCustomElements } from '@ionic/pwa-elements/loader'; // add this line

import IonicVue from '@ionic/vue';

Vue.use(IonicVue);

Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]
defineCustomElements(window);  // add this line

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
