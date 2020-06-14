import Vue from 'vue'
import App from './App.vue'
import VueGoodTablePlugin from 'vue-good-table';
import axios from 'axios'
import VueAxios from 'vue-axios'
import JsonExcel from 'vue-json-excel'
 
Vue.component('downloadExcel', JsonExcel)
Vue.use(VueAxios, axios)

// import the styles
import 'vue-good-table/dist/vue-good-table.css'

Vue.use(VueGoodTablePlugin);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
