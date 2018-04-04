<template lang="pug">
	div
		h1 菜单

		table
			thead
				tr
					th 尺寸
					th 价格
					th 加入
			tbody(v-for='item in getMenuItems' :key='item.name')
				tr
					td {{item.name}}
				tr(v-for='option in item.options' :key='item.size')
					td {{option.size}}
					td {{option.price}}
					td 
						el-button(icon="el-icon-plus")
</template>

<script>
    export default {
      data() {
        return {
		    baskets:[],
	        getMenuItems:{
	          1: {
	            'name': '榴莲pizza',
	            'description': '这是喜欢吃榴莲朋友的最佳选择',
	            'options': [{
	              'size': 9,
	              'price': 38
	            }, {
	              'size': 12,
	              'price': 48
	            }]
	          },
	          2: {
	            'name': '芝士pizza',
	            'description': '芝士杀手,浓浓的芝士丝, 食欲瞬间爆棚',
	            'options': [{
	              'size': 9,
	              'price': 38
	            }, {
	              'size': 12,
	              'price': 48
	            }]
	          },
	          3: {
	            'name': '夏威夷pizza',
	            'description': '众多人的默认选择',
	            'options': [{
	              'size': 9,
	              'price': 36
	            }, {
	              'size': 12,
	              'price': 46
	            }]
	          }
	        },

        }
      }
    }
  </script>
