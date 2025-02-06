//项目后端接口
import request from './request'
export const login=(body)=>request.post('/api/login',body).then(res=>{return res})
export const getUserInfo=()=>request.get('/api/userinfo').then(res=>{return res})   