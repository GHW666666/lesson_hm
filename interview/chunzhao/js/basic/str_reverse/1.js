function reverseStr(str) {
    if(typeof str!=='string') {
        return
    }
    return str.split('').reverse().join('');
}
console.log(reverseStr('hello'));