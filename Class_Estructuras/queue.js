// Implementación de Queue
class Queue{
    constructor(){
    this.items = []
    }

    // Métodos
    enqueue(item){
        this.items.push(item)
    }

    dequeue(){
        return this.items.shift()
    }

    peek(){
        return this.items[0]
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items)
    }

    // Métodos auxiliares

    isEmpty(){
        // if(this.item.length == 0){
        //     return = false
        // }
        // else
        //     return = true
        return this.item.lenght == 0
    }

    front(){
        // return this.items[0]
        return this.peek()
    }

    back(){
        return this.items[this.items.length - 1]
    }
}

let q = new Queue()
q.enqueue("Taki taki")
q.enqueue("No rompas mas")
q.enqueue("Payaso de rodeo")
q.enqueue("Sonidito")

q.dequeue()
