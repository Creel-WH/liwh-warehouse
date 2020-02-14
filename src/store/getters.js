export default{
	//计算属性
	powerCount(state){
		return state.counter * state.counter
	},
	powerCountS(state,getters){
		return getters.powerCount / 2
	},
	powerCountX(state,getters){
		return count => {
			return getters.powerCountS / count
		}			
	}
}