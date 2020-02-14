<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
		<!-- <button @click="btn">超级过滤</button> -->
		<h2>{{count}}</h2>
		<button @click="addition">变多</button>
		<button @click="subtraction">变少</button>
		<p>我是count的平方:{{this.$store.getters.powerCount}}</p>
		<p>我是楼上的二分之一:{{this.$store.getters.powerCountS}}</p>
		<p>我是楼上的五分之一:{{this.$store.getters.powerCountX(5)}}</p>
		<div>
			<!-- tag: router-link默认被渲染成a标签，如果想变成其他标签，可使用tag -->
			<router-link to="/home" tag="button">首页</router-link>
			<router-link to="/Second" tag="button">第二页</router-link>
			<router-link to="/Third/在这停顿" tag="button">第三页</router-link>
			<router-view></router-view>
		</div>

  </div>
</template>

<script>
	import {INCREMENT} from './store/mutation-types'
	import {getLine} from './network/App'
export default {
  name: 'App',
	computed: {
		count() {
			return this.$store.state.counter
		}
	},
	methods: {
		btn() {
			getLine().then(res => {
			   console.log(res.data)
				 console.log('https://www.apiopen.top/satinApi?type=1&page=1')
			 })
			 .catch(function (err) {
			   console.log(err)
			 })
		},
		addition(){
			this.$store.commit(INCREMENT)
		},
		subtraction(){
			this.$store.commit('decrease')
		},
// 		setline(payload){
// 			this.$tore.commit('setData',payload)
// 		}
	},

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

</style>
