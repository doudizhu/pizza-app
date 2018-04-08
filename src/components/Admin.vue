<template lang="pug">
div
	h1 管理
	el-row
		//- new pizza
		el-col(:span='12')
			app-new-pizza
			

		//- 品种展示
		el-col(:span='12')
			h3 菜单
			table
				thead
					tr
						th 品种
						th 删除
				tbody(v-for='item in getMenuItems' :key='item.id')
					tr
						td {{item.name}}
						td
							el-button(icon='el-icon-close' @click='deleteData(item)')

</template>

<script>
import NewPizza from './NewPizza.vue'
export default{
	data(){
		return {
			// getMenuItems:[]
		}
	},
	components:{
		'app-new-pizza':NewPizza
	},
	computed:{
		getMenuItems:{
			// 在vuex中获取数据
			get(){
				// return this.$store.state.menuItems
				
				// 通过getters获取数据
				return this.$store.getters.getMenuItems
			},
			set(){

			}
		},
	},
	created(){
		fetch('https://pizza-app-f4419.firebaseio.com/menu.json')
			.then(res=>{
				return res.json()
			})
			.then(data=>{
				// console.log(data)
				let menuArray = []
				for(let key in data){
					// console.log(key);
					// console.log(data[key]);
					data[key].id = key
					menuArray.push(data[key])
				}
				// this.getMenuItems = menuArray
				
				// 数据同步
				this.$store.commit('setMenuItems',menuArray)
			})
	},
	methods:{
		deleteData(item){
			fetch('https://pizza-app-f4419.firebaseio.com/menu/'+item.id+'/.json',{
				method:'DELETE',
				headers:{
					'Content-type':'application/json'
				}
			})
				.then(res=>res.json())
				// .then(data=>this.$router.push({name:'menuLink'}))
				.then(data=>{
					this.$store.commit('removeMenuItems',item)
				})
				.catch(err=>console.log(err))
		}
	}
}
	// export default{
		// // 组件内守卫
		// data(){
		// 	return {
		// 		name:'Henry'
		// 	}
		// },
		// beforeRouteEnter:(to,from,next)=>{
		// 	// 由于在页面渲染前执行，故this.name为undefined
		// 	// alert('Hello '+this.name);
		// 	// next();
			
		// 	next(vm=>{
		// 		alert('Hello '+vm.name)
		// 	})
		// },
		// beforeRouteLeave:(to,from,next)=>{
		// 	if(confirm('确认离开吗')==true){
		// 		next();
		// 	}else{
		// 		next(false);	
		// 	}
		// }
	// }
</script>