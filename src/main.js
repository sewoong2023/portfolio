import Vue from 'vue';
import App from './App.vue';
import { store } from './store/store.js';
import { router }  from './routers/router.js';
import './assets/sass/style.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

// free-solid
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

// free-brands
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';  




library.add(faTwitter, faBars, faTwitch, faCircleArrowLeft, faAngleDown );

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
