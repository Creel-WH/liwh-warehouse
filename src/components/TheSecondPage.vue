<template>
	<div>
		<h2>{{title}}</h2>
		<button @click="getLine" style="margin: 10px 10px;">axios查看</button>
    <form action="http://localhost:30001/users/look" method="post">
        <input type="submit" value="form查看"><br><br>
    </form>
    <div>
        账&nbsp; &nbsp;&nbsp;号：<input type="text" v-model="l_name" placeholder="请输入用户名或手机号">
        密&nbsp; &nbsp;&nbsp;码：<input type="password" v-model="l_pwd">
        <input type="button" value="登录" @click="login()"></input>
    </div>
    <br><br>
    <div>
        填写用户名：<input type="text" v-model="r_name" />
        填写手机号：<input type="number" v-model="r_phone" />
        填 写 密 码：<input type="text" v-model="r_pwd" />
        <input type="button" value="确认" @click="register()"/>
    </div>
    <p>{{data}}</p>
	</div>
</template>

<script>
	import {getLine} from '@/network/App'
	import {INCREMENT} from '@/store/mutation-types'
export default {
	data() {
		return {
			title: '我是第二页，我能查看',
			data: '',
      l_name: '',
      l_pwd: '',
      r_name: '',
      r_phone: '',
      r_pwd: '',
		}
	},
	computed: {

	},
	created(){
	 //生命周期钩子：初始化
		// this.getLine()
	},
	methods: {
		getLine() {
			// getLine().then(res => {
			//    console.log(res)
			// 	 this.data = res;
			//  })
      this.$axios({
        url:'http://localhost:30001/users/look',
        method:'post',
        params:{

        }
      }).then(res=>{
        console.log(res);
        this.data = res.data;
      }).catch(err=>{
        console.log(err);
      });
    },
    login() {
      this.$axios({
        url:'http://localhost:30001/users/login',
        method:'post',
        params:{
          name: this.l_name,
          pwd: this.l_pwd
        }
      }).then(res=>{
        console.log(res.data);
      }).catch(err=>{
        console.log(err.data);
      });
    },
    register() {
      if(!this.r_name&&!this.r_phone){
        console.log("请输入用户名或者手机号");
        return;
      }else if(!this.r_pwd){
        console.log("请输入密码");
        return;
      }else{
        this.$axios({
          url:'http://localhost:30001/users/register',
          method:'post',
          params:{
            name: this.r_name,
            phone: this.r_phone,
            pwd: this.r_pwd
          }
        }).then(res=>{
          console.log(res.data);
        }).catch(err=>{
          console.log(err.data);
        });
      }

    },
	},
}
</script>

<style>
</style>
