import Vue from 'vue'
import App from './App.vue'
import router from './router'

// add ionic
import IonicVue from '@ionic/vue';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import { defineCustomElements } from '@ionic/pwa-elements/loader'; // add this line

import { addIcons } from "ionicons";
import { construct, home } from "ionicons/icons";

// add vant
import { Button } from 'vant';

// add ionic
addIcons({
  "ios-construct": construct.ios,
  "md-construct": construct.md,
  "ios-home": home.ios,
  "md-home": home.md,
});

Vue.use(IonicVue);

Vue.config.ignoredElements = [/^ion-/];
defineCustomElements(window);  // add this line

// add vant
Vue.use(Button);

// default config
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
