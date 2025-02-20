# ai Assistant全栈项目
- 后端驱动为主
 - ddos肉鸡工具
  - 极多网络请求导致服务器崩溃
 - 设计模式
   - 工厂模式
   - 单例模式
   - 观察者模式
   - 订阅者模式
   - m(model模型，数据库独立于后端 orm框架封装数据库语句)，v(view视图 前端页面)，c(controller控制器 控制model层数据库与view层前端页面 的交互)模式

- 大前端驱动的全栈 
 - 前端m(model模型层=数据存储+数据管理 useState,ref,reactive,api/axios,pinia)v(view视图层 component views的组件 )vm(视图模型层=视图层+模型层 数据绑定{{}} 数据驱动页面v-for)框架

 - 项目准备
  - 安装python
  - 配置虚拟环境
  python -m venv ai_assistant
   本地项目依赖不受全局影响
  - 激活虚拟环境
  .\ai_assistant\Scripts\activate
  - 安装依赖包隔离全局
  pip install openai Flask python-dotenv -i https://mirrors.aliyun.com/pypi/simple/
  - 没有做前端后分离 前端static目录

- 静态资源
 - js/css/img
 - 启动静态服务器 
- 状态码
 - 1xx 请求中
 - 2xx 成功
 - 3xx 重定向
 - 4xx 客户端错误
  - 405 请求方法不被允许
 - 5xx 服务端错误 