let a = [5, 2, 6, 9, 10]
a.sort((a, b) => {
    return a - b
})

console.log(a);

let b = [
    {
        id: "2",
        name: '123'
    },
    {
        id: "1",
        name: '123'

    },
    {
        id: "3",
        name: '123'
    }
]

 compare=(property)=>{
    return (a,b)=>{
        let val1 = parseInt(a[property]);
        let val2 = parseInt(b[property]);
        return val1-val2;
    }
}

b.sort(compare('id'));

console.log(b)

