<template lang="pug">
	el-container
		el-header 联系我们
		el-main 
			h4 联系我们
			p 27732357@qq.com

			router-link(:to="{name:'phoneLink'}") 电话
			router-link(:to="{name:'personNameLink'}") 联系人

			router-view
</template>