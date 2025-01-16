let num = await readline();
let m = num.toString().split('.')[1].slice(0, 1);

let answer;

m > 4 ? answer = parseInt(num) + 1 : answer = parseInt(num)

console.log(answer)