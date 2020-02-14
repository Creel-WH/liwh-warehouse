export default{
	state:{
		name:'我是就是一个弟弟'
	},
	getters:{},
	mutations:{
		updateName(state,payload){
			if(state.name == payload){
				state.name = '我是就是一个弟弟'
			}else{
				state.name = payload
			}			
		}
	},
	actions:{
		updateNameS(context){
			setTimeout(() => {
				context.commit('updateName','我不是弟弟，你才是弟弟')
			},1000)
		}
	}
}