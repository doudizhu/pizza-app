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
	mode:'history' //去除url的#
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

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
