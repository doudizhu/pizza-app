<template lang="pug">
	div
		h1 登录
		el-form(@submit.prevent='onSubmit')
			el-form-item(label='邮箱')
				el-input(v-model='email')
			el-form-item(label='密码')
				el-input(v-model='password')
			el-form-item
				el-button(type='submit' @click='onSubmit') 登录

</template>

<script>
import axios from 'axios';

  export default {
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      onSubmit() {
        axios.get('/users.json')
			.then(res=>{
				// console.log(res);
				const data = res.data
				const users = []
				for(let key in data){
					const user = data[key]
					// console.log(user)
					users.push(user)
				}

				// console.log(users);
				
				// 实现过滤
				let result = users.filter(user=>{
					return user.email === this.email && user.password === this.password
				})

				// console.log(result);
				// 判断result的长度是否大于0
				if(result != null && result.length >0){
					this.$router.push({name:'homeLink'})
				}else{
					alert('账号或密码错误')
				}
			})
      }
    }
  }
</script>