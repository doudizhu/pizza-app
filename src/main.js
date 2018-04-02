import Vue from 'vue'
import App from './App.vue'

// 1.引入样式element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


// 2.引入路由
import VueRouter from 'vue-router'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'
Vue.use(ElementUI)
Vue.use(VueRouter)
const routes = [
	{path:'/',name:'homeLink',component:Home},
	{path:'/menu',name:'menuLink',component:Menu},
	{path:'/admin',name:'adminLink',component:Admin},
	{path:'/about',name:'aboutLink',component:About},
	{path:'/login',name:'loginLink',component:Login},
	{path:'/register',name:'registerLink',component:Register},
	{path:'*',redirect:'/'}
]
const router = new VueRouter({
	routes,
	mode:'history' //去除url的#
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
