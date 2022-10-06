class Queue {
    constructor() {
        this.items = []
    }
    
    enqueue(item) {
        this.items.push(item)
    }
    
    dequeue() {
        return this.items.shift()
    }
    
    peek() {
        return this.items[0]
    }
    
    size() {
        return this.items.length
    }
    
    isEmpty() {
        /*
        if(this.items.length == 0) {
            return true
        } else {
            return false
        }
        */
        return this.items.length == 0
    }
    
    front() {
        //return this.items[0]
        return this.peek()
    }
    
    back() {
        return this.items[this.items.length - 1]
    }
    
    print() {
        console.log(this.items)
    }

}

let q = new Queue()
q.enqueue("taki taki")
q.enqueue("No rompas mas")
q.enqueue("Caballo de rodeo")
q.enqueue("El sonidito")