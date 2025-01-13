   // Array.prototype.mySome = function(callBack) {
    //     let thiArg = arguments[1] || window,
    //         _arr = this;
    //     for (let i = 0; i < _arr.length; i++) {
    //         if (callBack.call(thiArg, _arr[i], i, _arr))
    //             return true;
    //     }
    //     return false;
    // }

    // Array.prototype.mySome = function(callbackFn) {
    //     var _arr = this,
    //         thisArg = arguments[1] || window;
    //     // 开始标识值为false
    //     // 遇到回调返回true，直接返回true
    //     // 如果循环执行完毕，意味着所有回调返回值为false，最终结果为false
    //     for (var i = 0; i < _arr.length; i++) {
    //         // 回调函数执行为false，函数中断
    //         if (callbackFn.call(thisArg, _arr[i], i, _arr)) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }



    Array.prototype.myEvery = function(callback) {
        let thisArg = arguments[1] || window,
            _arr = this;
        for (let i = 0; i < _arr.length; i++) {
            if (!callback.call(thisArg, _arr[i], i, _arr))
                return false
        }
        return true;
    }


    console.log([1, 2, 3, 10].myEvery((x) =>
        x < 200
    ))