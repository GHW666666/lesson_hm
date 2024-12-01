- node的模块系统
首先初始化项目 npm init -y
导入依赖 request-promise 发送http请求，得到html字符串
导入依赖 cheerio 内存里模拟浏览器，解析html字符串，调用load(html)方法，得到查询器($) ,$('table tr') 得到tr标签


