function myNew(Con) {
    let obj = Object.create(null);
    //let obj = {};
    Object.setPrototypeOf(obj, Con.prototype);
    const ret = Con.apply(obj, [].splice.call(arguments, 1));
    return typeof ret === 'object' ? ret : obj
}

function myNew(Con, ...args) {
    const obj = {}; // 新建一个空对象
    const result = Con.call(obj, ...args); // 执行构造函数
    obj.__proto__ = Con.prototype; // 设置原型链

    // 注意如果原构造函数有Object类型的返回值，包括Functoin, Array, Date, RegExg, Error
    // 那么应该返回这个返回值
    const isObject = typeof result === 'object' && result !== null;
    const isFunction = typeof result === 'function';
    if (isObject || isFunction) {
        return result;
    }

    // 原构造函数没有Object类型的返回值，返回我们的新对象
    return obj;
}