function quickSort(arr) {
    const pivot = arr[0]; // 选择第一个元素作为基准点
    const left = []; // 小于基准点的元素
    const right = []; // 大于基准点的元素
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]; // 递归排序并合并结果  

}