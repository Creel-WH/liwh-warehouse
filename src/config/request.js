import axios from 'axios';
import QS from 'qs';
import { baseUrl } from './env';

const service = axios.create({
    baseURL: baseUrl,
    withCredentials: true, // 跨域请求
    timeout: 5000, // 请求超时
})
// //自动切换环境
// axios.defaults.baseURL = baseUrl;
// //设置超时时间
// axios.defaults.timeout = 10000;
// // post请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//对外接口
export function request({method, url, params}){
    if(method == 'Get'){
        return get(url, params);
    }else if(method == 'Post'){
        return post(url, params);
    }else if(method == 'Post_'){
        return post_(url, params)
    }else if(method == 'Upload'){
        return upload(url, params);
    }
}

// 封装get方法
function get(url, params){
    return new Promise((resolve, reject) =>{
        service.get(url, {params:params}).then(res =>{
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    });
}

// 封装post方法params
function post(url, params){
    return new Promise((resolve, reject) =>{
        service.post(url, QS.stringify(params)).then(res =>{
            resolve(res.data);
        }).catch(err =>{
            reject(err.data);
        })
    });
}

// 封装post方法params
function post_(url, params){
    return new Promise((resolve, reject) =>{
        service.post(url, params).then(res =>{
            resolve(res.data);
        }).catch(err =>{
            reject(err.data);
        })
    });
}

// 封装upload方法
function upload(url, params){
    let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    };
    return new Promise((resolve, reject) =>{
        service.post(url, params,config).then(res =>{
            resolve(res.data);
        }).catch(err =>{
            reject(err.data);
        })
    });
}

export default request
