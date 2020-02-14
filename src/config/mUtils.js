// /**
//  * 存储localStorage  setStore('buyCart', state.cartList);
//  */
// export const setStore = (name, content) => {
// 	if (!name) return;
// 	if (typeof content !== 'string') {
// 		content = JSON.stringify(content);
// 	}
// 	window.localStorage.setItem(name, content);
// }

// /**
//  * 获取localStorage
//  */
// export const getStore = name => {
// 	if (!name) return;
// 	return window.localStorage.getItem(name);
// }

// /**
//  * 删除localStorage
//  */
// export const removeStore = name => {
// 	if (!name) return;
// 	window.localStorage.removeItem(name);
// }
const mUtils =  {
    setStore(name, content){
		if (!name) return;
		if (typeof content !== 'string') {
			content = JSON.stringify(content);
		}
		window.localStorage.setItem(name, content);
    },
    getStore(name){
		if (!name) return 3;//如果没有用户登录，返回3
		return window.localStorage.getItem(name);
    },
    removeStore(name){
		if (!name) return;
		window.localStorage.removeItem(name);
    }  
} 
export default  mUtils