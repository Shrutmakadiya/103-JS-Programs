class Queue {
    constructor() {
        this.queue = []
    }
    enqueue(element) {
        return this.queue.push(element)
    }
    size() {
        return this.queue.length
    }
    peek() {
        return this.queue[this.queue.length - 1]
    }
    isEmpty() {
        return this.queue.length == 0;
    }
    dequeue() {
        if (this.queue.length > 0) {
            this.top = this.top - 1;
            return this.queue.shift();
        }
    }
    clear() {
        this.queue = []
    }
}

let queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(74)

document.write(queue.peek() + "<br>")
document.write(queue.size() + "<br>")
document.write(queue.dequeue() + "<br>")
document.write(queue.isEmpty() + "<br>")
document.write(queue.dequeue() + "<br>")
document.write(queue.size() + "<br>")
document.write(queue.dequeue() + "<br>")
document.write(queue.clear() + "<br>")
document.write(queue.isEmpty())