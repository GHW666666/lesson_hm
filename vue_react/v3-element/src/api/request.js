
//react vue http 请求标配 
// fs 文件系统模块node内置 node_modules 文件夹下的第三方包
import axios from 'axios';
// 实例
const service=axios.create({
    baseURL:'/',//基础路径
    timeout:5000//超时时间
})
//fetch /xhr只是js向后端通信 
service.interceptors.request.use(
    config=>{
        //请求拦截 config请求对象
        console.log('请求拦截',config);
        let token=localStorage.getItem('token')||'';//获取本地存储的token
        if(token){//如果有token
            config.headers['Authorization']='Bearer '+token;//设置请求头
            //Bearer 是一个认证授权的规范，后面跟着的是token字符串。
        }

        return config;

    }
)
//登录之后都要发送token
export default service;