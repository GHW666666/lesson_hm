/**
 *   @func 就地编辑
 *   @param {id ，parent 父节点 ，value 默认值}
 *   @author 
 *   @date 2024-06-20
 */
function EditInPlace(id,parent,value){

    this.id = id;//跨函数的共享属性
    this.parent = parent || document.body;
    this.value = value || '这个家伙很懒，什么都没写';
    this.createElement(this.id)

}
EditInPlace.prototype.createElement=function(id){
    console.log('ddddddddddddddddddddd');
   this.container = document.createElement('div');
   this.container.id = id;
   console.log(this.parent)
   this.parent.appendChild(this.container);
   this.staticElement=document.createElement('span');
   this.staticElement.innerText=this.value;
   this.container.appendChild(this.staticElement);

}