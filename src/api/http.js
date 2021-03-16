//封装axios
import axios from 'axios' //引入axios
//引入qs模块，用来序列化post类型的数据
import QS from 'qs'  
// vant的toast提示框组件
// import { Toast } from 'vant'  

// 环境的切换 (通过node的环境变量来匹配我们的默认的接口url前缀)

// if (process.env.NODE_ENV == 'development') { //开发环境
//     axios.defaults.baseURL = 'https://www.baidu.com';} 
// else if (process.env.NODE_ENV == 'debug') {    //测试环境
//     axios.defaults.baseURL = 'https://www.ceshi.com';
// } 
// else if (process.env.NODE_ENV == 'production') {   //生产环境
//     axios.defaults.baseURL = 'https://www.production.com';
// }

//设置默认的请求超时时间(10秒),如超过了10s，就会告知用户当前请求超时，请刷新等
axios.defaults.timeout = 10000
//设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 先导入vuex,因为我们要使用到里面的状态对象
// vuex的路径根据自己的路径去写
import store from '@/store/store';

// 请求拦截器axios.interceptors.request.use(    
    // config => {        
        // 每次发送请求之前判断vuex中是否存在token        
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
//         const token = store.state.token;        
//         token && (config.headers.Authorization = token);        
//         return config;    
//     },    
//     error => {        
//         return Promise.error(error);    
// })

//get方法，对应get请求
//@param {String} url [请求的url地址]
//@param {Object} params [请求时携带的参数]

//封装get请求
export function get(url, params){    
        return new Promise((resolve, reject) =>{        
            axios.get(url, {            
                params: params        
            }).then(res => {
                resolve(res);
            }).catch(err =>{
                reject(err)        
        })    
    });
}
//封装post请求
export function post(url, params) { //url--请求地址, params--请求对象数据
    return new Promise((resolve, reject) => {
         axios.post(url, QS.stringify(params))
        .then(res => { //请求成功
            resolve(res);
        })
        .catch(err =>{ //请求失败
            reject(err)
        })
    });
}
