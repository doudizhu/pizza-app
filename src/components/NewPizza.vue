<template lang="pug">
div
	h3 添加新的Pizza
	el-form(@submit.prevent='onSubmit'  label-width="8em")
		el-form-item(label='品种')
			el-input(v-model='newPizza.name')
		el-form-item(label='描述')
			el-input(type='textarea' v-model='newPizza.description')
		el-form-item 
			p 选项一
		el-form-item(label='尺寸')
			el-input(v-model='newPizza.size1')
		el-form-item(label='价格')
			el-input(v-model='newPizza.price1')
		el-form-item 
			p 选项二
		el-form-item(label='尺寸')
			el-input(v-model='newPizza.size2')
		el-form-item(label='价格')
			el-input(v-model='newPizza.price2')
		el-form-item
			el-button(type='submit' @click='onSubmit') 添加
</template>


<script>
export default {
	data() {
		return {
			newPizza: {}
		}
	},
	methods: {
		onSubmit() {
			// console.log(this.newPizza)
			let data ={
				name:this.newPizza.name,
				description:this.newPizza.description,
				options:[
					{
						size:this.newPizza.size1,
						price:this.newPizza.price1,
					},
					{
						size:this.newPizza.size2,
						price:this.newPizza.price2,
					},
				]
			}

			// axios || vue-resource || es6 fetch
			fetch('https://pizza-app-f4419.firebaseio.com/menu.json',{
				method:'POST',
				headers:{
					'Content-type':'application/json'
				},
				body:JSON.stringify(data)
			})
				.then(res=>res.json())
				.then(data=>this.$router.push({name:'menuLink'}))
				.catch(err=>console.log(err))
		}
	}
}
</script>