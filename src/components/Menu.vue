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
// import axios from 'axios'

export default {
	data() {
		return {
			baskets: [],
			basketsText:'购物车没有任何商品',
			// getMenuItems: {},
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
		},
		getMenuItems(){
			// 在vuex中获取数据
			// return this.$store.state.menuItems
			
			// 通过getters获取数据
			return this.$store.getters.getMenuItems
		}
	},
	created(){
		this.fetchData()
	},
	methods: {
		fetchData(){
			// fetch('https://pizza-app-f4419.firebaseio.com/menu.json')
			// 	.then(res=>{
			// 		return res.json()
			// 	})
			// 	.then(data=>{
			// 		this.getMenuItems = data
			// 	})
			
			// axios.get('menu.json')
			// 	.then(res => this.getMenuItems = res.data)
			
			// this.http.get('menu.json')
			// 	.then(res => this.getMenuItems = res.data)
			
			// 将请求下来的数据存储到vuex中
			this.http.get('menu.json')
				.then(res => this.$store.commit('setMenuItems',res.data))
		
		},
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
