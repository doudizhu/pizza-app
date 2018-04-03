import Vue from 'vue'
import App from './App.vue'

// 1.引入样式element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)


// 2.引入路由
import VueRouter from 'vue-router'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'
// 二级路由
import History from './components/about/History'
import Contact from './components/about/Contact'
import OrderingGuide from './components/about/OrderingGuide'
import Delivery from './components/about/Delivery'
// 三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'
Vue.use(VueRouter)
const routes = [
	{path:'/',name:'homeLink',component:Home},
	{path:'/menu',name:'menuLink',component:Menu},
	{path:'/admin',name:'adminLink',component:Admin},
	{path:'/about',name:'aboutLink',component:About,redirect:'/about/contact',children:[
		{path:'/history',name:'historyLink',component:History},
		{path:'/about/contact',name:'contactLink',component:Contact,redirect:'/personName',children:[
			{path:'/phone',name:'phoneLink',component:Phone},
			{path:'/personName',name:'personNameLink',component:PersonName},
		]},
		{path:'/orderingGuide',name:'orderingGuideLink',component:OrderingGuide},
		{path:'/delivery',name:'deliveryLink',component:Delivery},
	]},
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
