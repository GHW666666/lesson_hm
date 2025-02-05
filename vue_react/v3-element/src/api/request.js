
//react vue http 请求标配 
// fs 文件系统模块node内置 node_modules 文件夹下的第三方包
import axios from 'axios';
// 实例
const service=axios.create({
    baseURL:'/',//基础路径
    timeout:5000//超时时间
})

export default service;