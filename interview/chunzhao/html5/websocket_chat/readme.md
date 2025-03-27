- 五层模型
    - 物理层
    - 数据链路层
    - 网络层
    - 传输层
    - 应用层
- tcp/ip 传输层协议
- http是 应用层协议
- b/s 架构 
    - 浏览器/服务器
- 及时通信 Socket 协议 

- http 与websocket区别
    - http是单向通信，(只能是客户端向服务端发送 请求响应 服务器端不可以向客户端发送消息)websocket是双向通信(全双工通信协议)
    - http是无状态的，(服务器不会保存客户端消息)websocket是有状态的( socket连接分配一个socketid 对应一个连接 )
    - http是基于请求响应的，websocket是基于事件的

- websocket搭建流程
   1 先基于http请求访问页面
   2 html5 向服务端的websocket 地址发起请求
   101 Switching Protocols 协议切换  切换到websocket协议