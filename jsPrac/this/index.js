    //谁调用 函数 this 就指向谁 
    // function test(name) {
    //     console.log(name)
    //     console.log(this)
    // }
    // test('Jerry') //window.test()
    // function test(name) {
    //     console.log(name)
    //     console.log(this)
    // }
    // test.call(undefined, 'Tom')

    // const test = {
    //     name: 1,
    //     b: function() {
    //         console.log(this.name)
    //     }
    // }

    // const test1 = {
    //     name: 2
    // }

    // test.b();
    // test.b.call(test)
    // test.b.call(test1)   使用call来改变this的指向

    // function test(name) {
    //     this.name = name
    // }

    // let p = new test('123');

    // console.log(p.name)


    // const obj = {
    //     a: function() {
    //         console.log(this)
    //     }
    // }
    // obj.a() //打出的是obj对象

    // const obj2 = {
    //     a: () => {
    //         console.log(this)
    //     }
    // }
    // obj2.a();

    // const obj = {
    //     a: function() {
    //         console.log(this)
    //     },
    //     b: {
    //         c: function() {
    //             console.log(this)
    //         }
    //     }
    // }
    // obj.a() // 打出的是obj对象, 相当于obj.a.call(obj)
    // obj.b.c() //打出的是obj.b对象, 相当于obj.b.c.call(obj.b)

    const obj = {
        a: function() {
            console.log(this)
        },
        b: {
            c: () => {
                console.log(this)
            }
        }
    }
    obj.a() //没有使用箭头函数打出的是obj
    obj.b.c() //打出的是window对象！！
        //箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this