function reverseStr(str){
    return str.replace(/./g,(char)=>char).split('').reverse().join('');

}