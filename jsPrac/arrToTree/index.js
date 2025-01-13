let arr = [
    {id:1,pid:-1},
    {id:2,pid:-1},
    {id:3,pid:-1},
    {id:4,pid:2},
    {id:5,pid:1},
    {id:6,pid:3},
    {id:7,pid:4},
    {id:7,pid:3},
]

// let arr = [
//     {id: 1, name: '部门1', pid: 0},
//     {id: 2, name: '部门2', pid: 1},
//     {id: 3, name: '部门3', pid: 1},
//     {id: 4, name: '部门4', pid: 3},
//     {id: 5, name: '部门5', pid: 4},
// ]



function arrToTree1(arr,root){
    let array = [];
    arr.forEach(item => {
        if(item.pid===root){
            item.children = arrToTree1(arr,item.id)
            if(item.children.length===0)
                delete item.children
            array.push(item)
        }
    });
    console.log(arr)
    return array;
}

//console.log(JSON.stringify(arrToTree1(arr,0)))
//console.log(arrToTree1(arr,-1))

function arrToTree2(arr,root){

    let tree = JSON.parse(JSON.stringify(arr))
   
    let array = [] 

    array = tree.filter((father=>{  

        father.children  =  tree.filter((children)=>{

            return father.id === children.pid

        })

        if(father.children.length===0)
            delete father.children

        return father.pid === root
    }))

    return array;
}


//console.log(JSON.stringify(arrToTree2(arr,-1)))

function arrToTree3(arr,root){

    let map = {};
    let array = [];

    arr.forEach(item=>{
        map[item.id] =item
    })

    arr.forEach((item)=>{
        if(item.pid===root)
            array.push(item);
        else{
            if(map[item.pid].children){
                map[item.pid].children.push(item)
            }else{
                map[item.pid].children=[item]
            }
        }
    })

    return array
}

//console.log(JSON.stringify(arrToTree3(arr,-1)))
//console.log(JSON.stringify(arrToTree2(arr,-1)))
console.log(JSON.stringify(arrToTree1(arr,-1)))