let a = [1, 2, 3, 4, 5]
let b = a.slice(0, 5);
a.pop();
console.log(a)
let c  = a.splice(1,1)
console.log(a)
console.log(b)
console.log(c)