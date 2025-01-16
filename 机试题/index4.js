
let  line = "123456"
let num = line.length;
let temp = parseInt(num / 8);
let arr = [];

for (let i = 0; i < temp; i++) {
    let str = line.slice(8 * i, 8 * i + 8);
    arr.push(str);
}


if (num % 8 != 0) {
    arr.push(line.slice(8 * temp, num))
}

if (arr[arr.length - 1].length != 8) {
    let n = 8 - arr[arr.length - 1].length;
    let str = "";
    for (let i= 0;i<n;i++) {
        str += "0";
    }
    arr[arr.length-1] = arr[arr.length-1] + str
}

let answer = arr.join("\n")
console.log(answer)