<template lang="pug">
    el-menu.el-menu-demo(:default-active='activeIndex', mode='horizontal', @select='handleSelect')
        el-menu-item(index='' disabled='') Pizza点餐系统
        el-menu-item(index='1')
          a(href='/') 主页
        el-menu-item(index='2')
          a(href='/menu') 菜单
        el-menu-item(index='3')
          a(href='/admin') 管理
        el-menu-item(index='4')
          a(href='/about') 关于我们
        el-menu-item(index='5')
          a(href=to='/login') 登录
        el-menu-item(index='6')
          a(href='/register') 注册
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