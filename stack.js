class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            let temp = this.head
            this.head = newNode
            this.head.next = temp
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) {
            return undefined
        }
        if (this.head === this.tail) {
            this.tail = null
        }
        this.head = this.head.next
        this.length--
        return this
    }

    traverse() {
        let current = this.head
        while (current) {
            console.log(current.val)
            current = current.next
        }
        return current
    }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

console.log(stack.traverse())