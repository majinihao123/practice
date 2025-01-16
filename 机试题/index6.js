let num = 123
let arr = []
for(let i = 2;i*i<=num;i++){
    while(num%i===0){
        arr.push(i)
        num = num/i
    }
}

console.log(arr.join(' '))