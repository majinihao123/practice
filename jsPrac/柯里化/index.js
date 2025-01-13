function cur(call) {
    let array = []

    return function res(...arg) {
        if (arg.length === 0)
            return call(array)
        else {
            array.push(...arg)
            return res
        }
    }
}

function call(res) {
    return res.reduce((a, b) => a + b)
}


console.log(cur(call)(1)(2, 3)(5)())