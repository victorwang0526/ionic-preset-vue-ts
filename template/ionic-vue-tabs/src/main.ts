import Vue from 'vue'
import App from './App.vue'
import router from './router'

import IonicVue from '@ionic/vue';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import { addIcons } from "ionicons";
import { construct, home } from "ionicons/icons";

addIcons({
  "ios-construct": construct.ios,
  "md-construct": construct.md,
  "ios-home": home.ios,
  "md-home": home.md,
});


Vue.use(IonicVue);

Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
