// async function test() {
//     return 'hello'
// }

// let t = test();

// t.then((item) => {
//     console.log(item)
// })

// function doSomeThing() {
//     console.log("执行doSomeThing");
//     return "testSometing";
// }

// async function testAsync() {
//     console.log("执行testAsync");
//     return Promise.resolve("hello async");
// }

// async function test() {
//     console.log("test start...");
//     const v1 = await doSomeThing(); //关键点1
//     console.log(v1);
//     const v2 = await testAsync();
//     console.log(v2);
//     // console.log(v1, v2);
// }
// test();

async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
}, 0)
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');