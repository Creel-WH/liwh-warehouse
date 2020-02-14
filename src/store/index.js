import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import moduleA from './modules/moduleA'

// 1.安装插件
Vue.use(Vuex);

// 2.创建对象

const state = {
	counter: 0,
	line: [],
}

const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	modules:{
		//其他模块
		a:moduleA
	}
})

export default store