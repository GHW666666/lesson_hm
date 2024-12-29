# js拉去数据
- AJAX 基于XMLHttpRequest
  - 请求数据接口
  const xhr=new XMLhttpRequest()
xhr.open('GET',url,false)
  - 发送请求
    xhr.send()
  - 事件监听 
    xhr.status==200 && xhr.readState==4
- fetch新方案 基于Promise对象 fetch(url,{
    method:'post'
})
