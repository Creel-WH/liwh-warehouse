import {INCREMENT} from './mutation-types'

export default{
	// 方法(更新store的唯一方法)
	[INCREMENT](state){
		state.counter++
	},
	decrease(state){
		state.counter--
	},
	//获取单个参数，多个参数时用创建对象传入
	increaseCount(state,count){
		state.counter += count
	},
	//异步操作在actions中改造后传入mutations
	updateCount(state){
		state.counter = 0
	},
	
	//获取列表信息
	setData(state,payload){
		state.line = payload
	}
}