<template lang="pug">
	div
		h1 关于我们
		el-container
			el-aside(width='200px')
				el-menu.el-menu-demo(:default-active='activeIndex' @open="handleOpen" @close="handleClose" :collapse="isCollapse")
					el-menu-item(index='1')
						router-link(:to="{name:'historyLink'}") 历史订单
					el-menu-item(index='2')
						router-link(:to="{name:'contactLink'}") 联系我们
					el-menu-item(index='3')
						router-link(:to="{name:'orderingGuideLink'}") 点餐文档
					el-menu-item(index='4')
						router-link(:to="{name:'deliveryLink'}") 快递信息
			el-main
				router-view
</template>

<script>
  export default {
  	data() {
      return {
      	isCollapse: false, // 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）
        activeIndex: '1',
        activeIndex2: '1',
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>