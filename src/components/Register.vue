<template lang="pug">
	div
		h1 注册
		el-form(@submit.prevent='onSubmit')
			el-form-item(label='邮箱')
				el-input(v-model='email')
			el-form-item(label='密码')
				el-input(v-model='password')
			el-form-item(label='确认密码')
				el-input(v-model='confirmPassword')
			el-form-item
				el-button(type='submit' @click='onSubmit') 注册

</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
      }
    },
    methods: {
      onSubmit() {
        
      }
    }
  }
</script>