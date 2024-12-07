- node package
  - 项目描述，作者，版本，
  - dependencies 依赖
  - devDependencies 开发依赖
  - scripts 脚本
    npm run dev development 开发环境


  - 版本号
     >1.0.0就是正式版本，上线
    - 大版本号：  1功能更新
    - 小版本号：  0修复bug
    - 补丁版本号：0性能优化
      
      2.0.0 vue2与vue3
    - 有重大更新
      2.2.0 新增功能
      2.0.1 修复bug

  - es6 模块化
    - import export import from（要求文件后缀mjs）
    - 模块化的目的： 解决命名冲突，代码复用
    - 模块化的方式： 函数，对象，类
  - es6 解构赋值
    - 对象数组都能用
     let {a,b} = {a:10, b:20}对象按照key解构
     let [a,...likes]=[1,2,3] 数组按照下标解构 a=1 likes=[2,3]
     let [a,,b]=[1,2,3] a=1 b=3

   - ai爬虫
     - 发送http请求 完成了 输入html字符串
     - 交给大模型promote
     `${indent_html}
     get the image link
     `