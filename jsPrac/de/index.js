function de(fn, dely) {
    let timeout;
    return function () {
        let context = this;
        let arg = arguments;
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(context, arg)
        }, dely)
    }
}

function getName(params) {
    console.log(params)
}


function th(fn, dely) {
    let bool = false
    return function () {
        if (bool) return;
        bool = true
        let context = this;
        let arg = arguments;
        fn.apply(context, arg)
        setTimeout(() => {
            bool = false
        }, dely)
    }
}


let con = th(getName, 1)

for (let i = 0; i < 10000; i++) {
    con("你好")
}

