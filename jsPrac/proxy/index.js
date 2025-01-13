const obj ={
    name:'nihao',
    age:18
}

const proxy = new Proxy(obj,{
    get(target,property){
        // console.log(target[property])
        return target[property]
    },

    set(target,property,val){
        target[property]=val
        // console.log(target[property])
        return target[property]
    }
})

console.log(proxy.name); // Getting name, John
proxy.name = 'Alice'; // Setting name to Alice
console.log(proxy.name); // Getting name, Alice

// console.log(proxy.age); // Getting age, 30
// proxy.age = 40; // Setting age to 40
// console.log(proxy.age); // Getting age, 40