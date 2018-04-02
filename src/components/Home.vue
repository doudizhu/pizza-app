<template lang="pug">
	div
		h1 主页
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