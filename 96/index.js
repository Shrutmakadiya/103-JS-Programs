class Stack {
    constructor(){
        this.data = []
        this.top = 0
    }
    push(element){
        this.data[this.top] = element
        this.top = this.top + 1
    }
    length() {
       return this.top
    }
    peek () {
        return this.data[this.top-1]
    }
    isEmpty() {
        return this.top === 0;
    }
    pop (){
        if(this.isEmpty() === false){
            this.top = this.top - 1;
            return this.data.pop();
        }
    }
    print(){
        var top = this.top -1;
        while(top >=0){
            document.write(this.data[top])
            top--;
        }
        document.write("<br>")
    }
}

let stack = new Stack()

document.write("Stack is = ")
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(74)
stack.print()

document.write(stack.isEmpty() +"<br>")
document.write(stack.length() +"<br>")
document.write(stack.peek() +"<br>")
document.write(stack.pop() +"<br>")
document.write(stack.pop() +"<br>")
document.write(stack.pop() +"<br>")
document.write(stack.pop() +"<br>")
document.write(stack.isEmpty() +"<br>")