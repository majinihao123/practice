Array.prototype.myReduce = function(callBack) {
    let _arr = this;
    let accumulator = arguments[1];
    let i = 0
    if (accumulator === undefined) {
        if (_arr.length === 0) {
            throw new Error('wrong');
        }
        accumulator = _arr[i]
        i++;
    }

    for (; i < _arr.length; i++) {
        accumulator = callBack(accumulator, _arr[i], i, _arr);
    }

    return accumulator;
}

// Array.prototype.myReduce = function(callbackFn) {
//     var _arr = this,
//         accumulator = arguments[1];
//     var i = 0;
//     // 判断是否传入初始值
//     if (accumulator === undefined) {
//         // 没有初始值的空数组调用reduce会报错
//         if (_arr.length === 0) {
//             throw new Error('initVal and Array.length>0 need one')
//         }
//         // 初始值赋值为数组第一个元素
//         accumulator = _arr[i];
//         i++;
//     }
//     for (; i < _arr.length; i++) {
//         // 计算结果赋值给初始值
//         accumulator = callbackFn(accumulator, _arr[i], i, _arr)
//     }
//     return accumulator;
// }



let answer = [1, 2, 3, 4].myReduce((pre, cur) => { return pre + cur })

console.log(answer)