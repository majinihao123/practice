// 三个状态：PENDING、FULFILLED、REJECTED
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';


const resolvePromise = (promise2, x, resolve, reject) => {
    // 自己等待自己完成是错误的实现，用一个类型错误，结束掉 promise  Promise/A+ 2.3.1
    if (promise2 === x) {
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }
    // Promise/A+ 2.3.3.3.3 只能调用一次
    let called;
    // 后续的条件要严格判断 保证代码能和别的库一起使用
    if ((typeof x === 'object' && x != null) || typeof x === 'function') {
        try {
            // 为了判断 resolve 过的就不用再 reject 了（比如 reject 和 resolve 同时调用的时候）  Promise/A+ 2.3.3.1
            let then = x.then;
            if (typeof then === 'function') {
                // 不要写成 x.then，直接 then.call 就可以了 因为 x.then 会再次取值，Object.defineProperty  Promise/A+ 2.3.3.3
                then.call(x, y => { // 根据 promise 的状态决定是成功还是失败
                    if (called) return;
                    called = true;
                    // 递归解析的过程（因为可能 promise 中还有 promise） Promise/A+ 2.3.3.3.1
                    resolvePromise(promise2, y, resolve, reject);
                }, r => {
                    // 只要失败就失败 Promise/A+ 2.3.3.3.2
                    if (called) return;
                    called = true;
                    reject(r);
                });
            } else {
                // 如果 x.then 是个普通值就直接返回 resolve 作为结果  Promise/A+ 2.3.3.4
                resolve(x);
            }
        } catch (e) {
            // Promise/A+ 2.3.3.2
            if (called) return;
            called = true;
            reject(e)
        }
    } else {
        // 如果 x 是个普通值就直接返回 resolve 作为结果  Promise/A+ 2.3.4  
        resolve(x)
    }
}

class PromiseTT {
    constructor(executor) {
        // 默认状态为 PENDING
        this.status = PENDING;
        // 存放成功状态的值，默认为 undefined
        this.value = undefined;
        // 存放失败状态的值，默认为 undefined
        this.reason = undefined;

        this.onResolveCallbacks = [];

        this.onRejectCallbacks = [];

        // 调用此方法就是成功
        let resolve = (value) => {
            // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
            if (this.status === PENDING) {
                this.status = FULFILLED;
                this.value = value;
                this.onResolveCallbacks.forEach((fn) => { fn() })
            }
        }

        // 调用此方法就是失败
        let reject = (reason) => {
            // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
            if (this.status === PENDING) {
                this.status = REJECTED;
                this.reason = reason;
                this.onRejectCallbacks.forEach((fn) => { fn() })
            }
        }

        try {
            // 立即执行，将 resolve 和 reject 函数传给使用者  
            executor(resolve, reject)
        } catch (error) {
            // 发生异常时执行失败逻辑
            reject(error)
        }
    }

    // 包含一个 then 方法，并接收两个参数 onFulfilled、onRejected
    then(onFulfilled, onRejected) {
        if (this.status === FULFILLED) {
            onFulfilled(this.value)
        }

        if (this.status === REJECTED) {
            onRejected(this.reason)
        }

        if (this.status === PENDING) {
            this.onResolveCallbacks.push(() => {
                onFulfilled(this.value)
            });

            this.onRejectCallbacks.push(() => {
                onRejected(this.reason)
            })

        }
    }
}

const promiseTest = new PromiseTT((resolve, reject) => {
    setTimeout(() => {}, 1000)
}).then((data) => {
        reject(data)
        console.log("success:" + data)

    },
    (data) => {
        console.log("reject:" + data)
    }
)