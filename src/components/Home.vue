<template lang="pug">
	#home
		h1 欢迎大家品尝pizza!
		h1 这里有你非常喜欢的pizza!
		el-button(@click="goToMenu") Let's order!
</template>
<script>
	export default{
		methods:{
			goToMenu(){
				// // 跳转到上一次浏览的页面
				// this.$router.go(-1)

				// 指向定跳转的地址
				// this.$router.replace('/menu')
				// 指定跳转路由的名字下
				// this.$router.replace({name:'menuLink'})

				// 通过push进行跳转
				// this.$router.push('/menu')
				// this.$router.replace({name:'menuLink'})	
			}
		}
	}
</script>

<style>
	#home{
		height: 85vh;
		background: #eee;
	}
</style>