import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios'
import store from '@/store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/common.scss'
import '@/utils/http'

Vue.use(ElementUI)

Vue.prototype.axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
