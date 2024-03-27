function dog(name, color) {
    this.name = name;
    this.color = color
}

dog.prototype.getDog = function() {
    console.log(`the dog name is ${this.name}  color is ${this.color}`)
}

let dogg = new dog('tom', 'black')

dogg.getDog();