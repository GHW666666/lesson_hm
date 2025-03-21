Object.create2=function(proto,propertyObject){
    if(proto===null||proto===undefined){
        throw new TypeError('Cannot convert undefined or null to object') 
    }
    function F(){}
    F.prototype=proto
    const obj=new F()
    if(propertyObject!==undefined){
        Object.defineProperties(obj,propertyObject)
    }
    return obj
}