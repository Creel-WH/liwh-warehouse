export default{
	aUpdateCount(context){
		setTimeout(() => {
			context.commit('updateCount')
		},1000)
	}
}