inputData = ['4', '0 1', '0 2', '1 2', '3 4']
let obj = {}
if (inputData.length - 1 == inputData[0]) {
    inputData.shift()
    inputData.forEach((item) => {
        let [key, value] = item.split(' ')
        console.log(key, value)
        obj[key] ? obj[key] = parseInt(obj[key]) + parseInt(value) : obj[key] = parseInt(value)

    })

    Object.keys(obj).forEach((item) => {
        console.log(`${item} ${obj[item]}`)
    })
}