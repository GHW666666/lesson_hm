- vue3响应式api
    - ref .value 响应式对象 Object.defineProperty 性能开销大
    - reactive 响应式代理 性能开销大
- 父子组件通信
    - props 父传子 传递一个响应式对象
    - 子传父 先@child-message(自定义事件)=handleChildMessage(自定义事件处理函数) 然后在子组件使用
    emit=defineEmits(['child-message'])接收自定义事件的函数
    emit('child-message',data)提交这个事件的名称和参数,这个参数会被父组件的handleChildMessage(message)函数中的massage接收