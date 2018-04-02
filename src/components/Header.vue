<template lang="pug">
    el-menu.el-menu-demo(:default-active='activeIndex', mode='horizontal', @select='handleSelect')
        el-menu-item(index='0' disabled) Pizza点餐系统
        el-menu-item(index='1')
          router-link(to='/') 主页
        el-menu-item(index='2')
          router-link(to='/menu') 菜单
        el-menu-item(index='3')
          router-link(to='/admin') 管理
        el-menu-item(index='4')
          router-link(to='/about') 关于我们
        el-menu-item(index='5')
          router-link(to='/login') 登录
        el-menu-item(index='6')
          router-link(to='/register') 注册
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
  }
</script>