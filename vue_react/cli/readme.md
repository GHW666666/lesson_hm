# vue+rect cli
- vue-cli command line
- 不是简单的页面开发
web app
- npm init vite
  vite 是一个基于原生 ES 模块的开发工具，快速构建前端项目
- npm init 初始化模板项目


- 项目结构
  - package.json
    - vue3^开发和上线都要用
    - vite 开发阶段才用，上线后不线后不需要(前端基建)vite是包工头

    - 工程的不同生命周期
      - dev 开发阶段
      - test 测试
      - build 上线
      - online 运营维护
  - npm run dev vite
     - http 协议5173 index.html
     - 首页 website
     - 挂载点 #app
     - scr/main.js 入口文件
    
    
    - scr/main.js
      - scr 开发目录
      - main.js 入口文件
      createApp(App).mount('#app')
    - 组件化开发
      APP.vue 根组件专属后缀
      - 三段式开发
        - template 模板结构
        {{}}
        - script 脚本 逻辑 响应式
        - style 样式
    
    - 组件是大与html的构建模块
      是现代前端开发的基石，由一个逻辑单元的html构成+css+js
      某项功能的抽象
    - 组件复用(.vue文件) import 
    - 组件以标签嵌入页面
      