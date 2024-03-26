
function getRes(res) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(res);
        }, 1000)
    })
}

function* getData(res) {
    const res1 = yield getRes(res);
    const res2 = yield getRes(res1+'123');
    const res3 = yield getRes(res2+'456');
    console.log(res3)
}

// const generator = getData('iceweb.io')

// generator.next().value.then(res1 => {
//     generator.next(`iceweb.org ${res1}`).value.then(res2 => {
//         generator.next(`iceweb.com ${res2}`).value.then(res3 => {
//             generator.next(res3)
//         })
//     })
// })


function asy(fn,result) {
    const gen = fn(result);
    const _auto = (res) => {
        let next = gen.next(res);
        if (next.done)
            return;
        next.value.then((ress)=>{
            _auto(ress)
        })
    }
    _auto();
}

asy(getData,'iceweb.io');