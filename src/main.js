import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import firebase from 'firebase'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

var firebaseConfig = {
  apiKey: "AIzaSyB2NbOtkfGWQdod6wP-FtPG1fEMlRfJETg",
  authDomain: "hemp-lives-matter.firebaseapp.com",
  databaseURL: "https://hemp-lives-matter.firebaseio.com",
  projectId: "hemp-lives-matter",
  storageBucket: "hemp-lives-matter.appspot.com",
  messagingSenderId: "521580246006",
  appId: "1:521580246006:web:95d34f54843593f3088dd7",
  measurementId: "G-MLR86DFYWK"
};
firebase.initializeApp(firebaseConfig);
window.firebase = firebase;

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
 * >> npm install firebase
 * >> npm install --save-dev @fortawesome/fontawesome-free
 * >> npm install bootstrap jquery popper.js
 * >>
 * >>
 */


/**
 * ERROR SOLUTIONS
 * 
 * Error:1 Solution
 * https://stackoverflow.com/questions/62759274/issue-when-running-npm-run-serve-in-vue-project * 
 * 
 * Bootstrap add
 * https://travishorn.com/adding-bootstrap-to-a-vue-cli-project-98c2a30e0ed0
 */