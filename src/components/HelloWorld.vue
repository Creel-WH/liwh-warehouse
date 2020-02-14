<template>
	<div>
		<h2>{{title}}</h2>
		<button @click="addCount(10)">想加多少加多少(10)</button>
		<button @click="UpdateCount">又回到最初的起点(1000ms)</button>
		<h2>{{$store.state.a.name}}</h2>
		<button @click="updateName">骗你的</button><br/><br/>
		<button @click="updateNameS">我比楼上多坚挺三秒</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: '我是首页，永远的Hello World！'
		}
	},
	methods: {
		addCount(count) {
			this.$store.commit('increaseCount',count)
		},
		
		// 异步操作
		UpdateCount() {
			this.$store.dispatch('aUpdateCount')
		},
		
		// 模块中的操作
		updateName() {
			this.$store.commit('updateName','我不是弟弟，你才是弟弟')
		},
		updateNameS() {
			this.$store.dispatch('updateNameS')
		}
	},
}
</script>

<style>
</style>