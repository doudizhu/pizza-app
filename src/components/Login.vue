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
  export default {
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>