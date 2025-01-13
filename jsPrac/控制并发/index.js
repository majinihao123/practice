class taskQueue {
    constructor(max) {
        this.max = max;
        this.list = [];
        setTimeout(() => {
            this.run();
        })
    }
    addTask = (i) => {
        this.list.push(i);
    }
    run = () => {
        if (this.list.length === 0)
            return;
        let min = Math.min(this.max, this.list.length)
        for (let i = 0; i < min; i++) {
            this.max--;
            let task = this.list.shift();
            task().then((res) => {
                console.log(res)
            }).catch((res) => {
                console.log(res)
            }).finally((res) => {
                this.max++;
                this.run();
            })
        }
    }
}

const task = new taskQueue(10)
for (let i = 0; i < 20; i++) {
    task.addTask(test(i))
}

function test(i) {
    return () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(i)
            }, 1000)
        })
    }
}