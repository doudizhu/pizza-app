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

export const routes = [
	{path:'/',name:'homeLink',component:Home},
	{path:'/menu',name:'menuLink',component:Menu},
	{path:'/admin',name:'adminLink',component:Admin,
		// 	与组件内守卫冲突故先注释掉
		// beforeEnter:(to,from,next)=>{
		// 	// 路由独享守卫
		// 	// alert('非登录状态，不能访问此页面');
		// 	// next(false);

		// 	// 判断store.gettes.isLogin === false
		// 	if(to.path == '/login' || to.path == '/register'){
		// 		next();
		// 	}else{
		// 		next('/login');
		// 	}
		// }
	},
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