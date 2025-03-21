function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
               [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            } 
        }  
    }
    return arr;

}
//优化
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let flag = true;
        for (let j = 0; j < arr.length - 1 - i; j++) {
           
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                flag = false;
            }
            if (flag) {
                break;
            }
        } 

    } 
    return arr;
}