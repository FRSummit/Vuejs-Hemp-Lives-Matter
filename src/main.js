import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

/**
 * INSTLATIONS
 * 
 * >> vue add vuetify
 * >>
 * >>
 * >>
 * >>
 * >>
 */


/**
 * ERROR SOLUTIONS
 * 
 * Error:1 Solution
 * https://stackoverflow.com/questions/62759274/issue-when-running-npm-run-serve-in-vue-project * 
 */