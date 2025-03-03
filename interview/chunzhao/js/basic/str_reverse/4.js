function reverseStr(str) {
    //reduce 返回值是高阶函数，acc是累加器，char是当前元素。

   return [...str].reduce((acc, char) => char + acc, '');
}