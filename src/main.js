import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
Vue.config.productionTip = false
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown, faList, faSearch, faSignIn, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faFacebookF, faChevronDown, faList, faSearch, faSignIn, faUserPlus, faTwitter, faYoutube)
Vue.component('fa', FontAwesomeIcon)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
