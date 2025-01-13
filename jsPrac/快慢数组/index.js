function unique(arr) {
    arr.sort((a, b) => a - b);
    var slow = 1,
        fast = 1;
    while (fast < arr.length) {
        if (arr[fast] != arr[fast - 1]) {
            arr[slow++] = arr[fast];
        }
        ++fast;
    }
    console.log(slow)
    arr.length = slow;
    return arr;
}

let a = [1, 1]

a.length = 3

console.log(a)