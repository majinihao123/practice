function flat(arr) {
    let result = []
    arr.forEach(element => {
        if (Array.isArray(element))
            result = result.concat(flat(element))
        else {
            result.push(element)
        }
    });
    return result
}

function flatTwo(arr) {
    return arr.reduce((a, b) => {
        return a.concat(Array.isArray(b) ? flatTwo(b) : b)
    }, [])
}

let a = [1, [2, [3, 4], [5, 6]], 7]

let b = flatTwo(a)

console.log(b)