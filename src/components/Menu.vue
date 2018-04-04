<template lang="pug">
div
	h1 菜单
	el-row
		//- 菜单
		el-col(:span='12')
			table
				thead
					tr
						th 尺寸
						th 价格
						th 加入
				tbody(v-for='item in getMenuItems' :key='item.name')
					tr
						td {{item.name}}
					tr(v-for='option in item.options' :key='option.size')
						td {{option.size}}
						td {{option.price}}
						td 
							el-button(icon="el-icon-plus" @click="addToBasket(item,option)")
		//- 购物车
		el-col(:span='12')
			div(v-if='baskets.length > 0')
				table
					thead
						tr
							th 数量
							th 品种
							th 价格
					tbody(v-for='item in baskets' :key='item.name+item.size')
						tr
							td 
								a(@click='decreaseQuantity(item)') -
								span {{item.quantity}}
								a(@click='increaseQuantity(item)') +
							td {{item.name}}{{item.size}}
							td {{item.price*item.quantity}}
				p 总价：{{total+'RMB'}}
				el-button 提交
			div(v-else) {{basketsText}}


</template>

<script>
export default {
	data() {
		return {
			baskets: [],
			basketsText:'购物车没有任何商品',
			getMenuItems: {
				1 : {
					'name': '榴莲pizza',
					'description': '这是喜欢吃榴莲朋友的最佳选择',
					'options': [{
						'size': 9,
						'price': 38
					},
					{
						'size': 12,
						'price': 48
					}]
				},
				2 : {
					'name': '芝士pizza',
					'description': '芝士杀手,浓浓的芝士丝, 食欲瞬间爆棚',
					'options': [{
						'size': 9,
						'price': 38
					},
					{
						'size': 12,
						'price': 48
					}]
				},
				3 : {
					'name': '夏威夷pizza',
					'description': '众多人的默认选择',
					'options': [{
						'size': 9,
						'price': 36
					},
					{
						'size': 12,
						'price': 46
					}]
				},
			},
		}
	},
	computed:{
		total(){
			let totalCost = 0
			for(let index in this.baskets){
				let individualItem = this.baskets[index]
				totalCost += individualItem.quantity * individualItem.price
			}

			return totalCost
		}
	},
	methods: {
		addToBasket(item, option) {
			let basket = {
				name: item.name,
				size: option.size,
				price: option.price,
				quantity: 1,
			}
			if(this.baskets.length > 0){
				// 过滤
				let result = this.baskets.filter(basket=>{
					return (basket.name === item.name && basket.price === option.price)
				})
				if(result != null && result.length > 0){
					result[0].quantity++
				}else{
					this.baskets.push(basket)
				}
			}else{
				this.baskets.push(basket)
			}
		},
		decreaseQuantity(item){
			item.quantity--
			if(item.quantity <= 0){
				this.removeFromBasket(item);
			}
		},
		increaseQuantity(item){
			item.quantity++
		},
		removeFromBasket(item){
			this.baskets.splice(this.baskets.indexOf(item),1)
		}
	},
}
</script>
