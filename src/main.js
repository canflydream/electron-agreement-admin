import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:9999'
axios.defaults.withCredentials = true
Vue.use(ViewUI);

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
