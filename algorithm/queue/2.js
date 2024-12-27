class ArrayQueue{
    #nums//#井号表示私有属性
    #front=0//对头 //内存的优化紧密相连
    #queueSize=0//队列大小
    //开辟capacity 就在内存中缓存空间

    constructor(capacity){
        //分配连续的内存空间
        this.#nums= new Array(capacity);
    }
    //ADT 抽象数据类型

    get size(){
        return this.#queueSize;
    }
    push(num){
        if(this.size==this.capacity){
            this.console.log("队列满了");
            return;
        }
        //求余，队尾下标
    const rear=(this.#front+this.size)%this.capacity;
    this.#nums[rear]=num;
    this.#queueSize++;
    }
    pop(){
        const num=this.peek()
        this.#front=(this.#front+1)%this.capacity;
        this.#queueSize--;
        return num;
    }
    peek(){
        if(this.isEmpty()){
         throw new Error("队列空了");
         return;
        }
        return this.#nums[this.#front]
    }
    isEmpty(){
        return this.#queueSize==0;
    }
    toArray(){
        const arr=[];
        for(let i=0,j=this.#front;i<this.size;i++){
            arr[i]=this.#nums[j%this.capacity];
        }
        return arr;
    }

}
const queue = new ArrayQueue();
console.log(queue);