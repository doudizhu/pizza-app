import Vue from 'vue'
import App from './App.vue'

// 1.引入样式element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)



new Vue({
  el: '#app',
  render: h => h(App)
})
