<template lang="pug">
    el-menu.el-menu-demo(:default-active='activeIndex', mode='horizontal', @select='handleSelect')
        el-menu-item(index='0' disabled) Pizza点餐系统
        el-menu-item(index='1')
          router-link(:to="{name:'homeLink'}") 主页
        el-menu-item(index='2')
          router-link(:to="{name:'menuLink'}") 菜单
        el-menu-item(index='3')
          router-link(:to="{name:'adminLink'}") 管理
        el-menu-item(index='4')
          router-link(:to="{name:'aboutLink'}") 关于我们
        el-menu-item(index='5' v-show='!isLogin')
          router-link(:to="{name:'loginLink'}") 登录
        el-menu-item(index='6' v-show='!isLogin')
          router-link(:to="{name:'registerLink'}") 注册
        el-menu-item(index='7' v-show='isLogin') {{currentUser}}
        el-menu-item(index='8' v-show='isLogin')
          router-link(:to="{name:'loginLink'}" ) 退出
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      }
    },
    computed:{
      currentUser(){
        return this.$store.getters.currentUser
      },
      isLogin(){
        return this.$store.getters.isLogin
      },
    },
  }
</script>