//
class AutoExpandArrayQueue{
     #num
     #front=0
     #queueSize=0
     constructor( capacity){
       this.#num=new Array(capacity)
     }
     get capacity(){
       return this.#num.length
     }
     get size(){
       return this.#queueSize
     }
     isEmpty(){
       return this.#queueSize===0
     }
     push(num){
        if(this.size===this.capacity){
            this.#expandCapacity()

        }
     }
     #expandCapacity(){
        let newCapacity=this.capacity*2
        let newNum=new Array(newCapacity)
        for(let i=0;i<this.size;i++){
            newNum[i]=this.#num[(this.#front+i)%this.capacity]
        }
        this.#num=newNum
        this.#front=0
     }
}