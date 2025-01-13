Promise.myAll = function (promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0)
            resolve()

        let ans = []
        let i = 0;
        promises.forEach(promise => {
            promise.then((res) => {
                i = i + 1
                ans.push(res)

                if (i == promises.length)
                    resolve(ans)
            }).catch((res) => {
                reject(res)
            })
        });
    }
    )
}

let p1 = Promise.resolve(1)
let p2 = Promise.resolve(2)
let p3 = Promise.reject(3)

Promise.myAll([p1,p2,p3]).then((res)=>{
    console.log(res)
}).catch((res)=>{
    console.log(res)
})