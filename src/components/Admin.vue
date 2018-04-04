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
				tbody
					tr
						td 榴莲pizza
						td
							el-button(icon='el-icon-close')

</template>

<script>
import NewPizza from './NewPizza.vue'
export default{
	components:{
		'app-new-pizza':NewPizza
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