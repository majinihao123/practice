let line = '0x1504';
console.log(line.toString())
let num = line.toString().slice(2);
console.log(num)
let dic = {
    '0':0,
    '1':1,
    '2':2,
    '3':3,
    '4':4,
    '5':5,  
    '6':6, 
    '7':7, 
    '8':8,
    '9':9, 
    'A': 10,
    'B': 11,
    'C': 12,
    'D': 13,
    'E': 14,
    'F': 15,
};
let answer = 0
for (let i = num.length - 1,j=0; i >= 0; i--,j++) {
    answer += dic[num[i]] * Math.pow(16,j)
}

console.log(answer)