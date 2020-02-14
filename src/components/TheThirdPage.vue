<template>
	<div>
		<h2>{{title}}</h2>
		<h2>我的路由地址是{{path}}</h2>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: '我是第三页，我是一个动态路由',
			path: this.$route.params.id
		}
	},
	methods: {
		
	},
}
</script>

<style>
</style>
