import Vue from 'vue'
import App from './App.vue'

// 1.引入样式element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)


// 2.引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import {routes} from './routes'
const router = new VueRouter({
	routes,
	mode:'history', //去除url的#
	scrollBehavior(to,from,savedPosition){
		// return {x:0,y:100}
		// return {selector:'button'}
		
		if(savedPosition){
			return savedPosition
		}else{
			return {x:0,y:0}
		}
	}
})

// 全局守卫
// router.beforeEach((to,from,next)=>{
// 	// alert('还没有登录，请先登录！');
// 	// next();
// 	// console.log(to);

// 	// 判断store.gettes.isLogin === false
// 	if(to.path == '/login' || to.path == '/register'){
// 		next();
// 	}else{
// 		alert('还没有登录，请先登录！');
// 		next('/login');
// 	}
// })

// // 后置钩子
// router.afterEach((to,from)=>{
// 	alert('after each');
// })

// 3.axios 基于promise的HTTP库
import axios from 'axios'
// 配置默认根路径
axios.defaults.baseURL = 'https://pizza-app-f4419.firebaseio.com/'
// 配置Vue原型(在任何组件中都可以正常使用axios)
Vue.prototype.http = axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
