class Stack{
    constructor(){
        this.items = []
    }


Push(items){
    this.push(items)
}

Pop(items){
    return this.items.pop()
}


Peek(){
    return this.items[this.items.length - 1]
}

Size(){
    return this.itemslength
}

Print(){
    console.log (this.itmes)
}
}

let s = new Stack()
s.push(1)
s.push(2)
s.push(3)
s.push(4)
