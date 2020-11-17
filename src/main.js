import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/common.scss'

Vue.use(ElementUI)

Vue.prototype.axios = axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
