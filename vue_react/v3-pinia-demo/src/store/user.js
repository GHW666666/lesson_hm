import { defineStore } from "pinia";
import { ref,reactive } from "vue";
export const useUserStore=defineStore('user',()=>{
    const isLogin=ref(false);
    const toLogin=()=>{
        isLogin.value=true;
    }
    const toLogout=()=>{
        isLogin.value=false;
    }
    const userInfo=reactive({
        name:'',
        avatar:'',
        massage:0,
        uid:null
    })
    const setUserInfo=()=>{
        userInfo.name='张三'
        userInfo.avatar='https://p26-passport.byteacctimg.com/img/user-avatar/3d681bc963f73f6e7d62d165703441cb~140x140.awebp'
        userInfo.massage=10
        userInfo.uid=1234567890

    }
    return {isLogin,toLogin,toLogout,userInfo,setUserInfo}
})
   