class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }

        this.length++
        return this
    }

    pop() {
        if (!this.head) {
            return undefined
        }

        let poppedNode = this.tail

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }

        this.length--
        return this
    }

    unshift(val) {
        let newNode = new Node(val)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this
    }

    shift() {
        if (!this.head) {
            return undefined
        }

        let currentHead = this.head

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = currentHead.next
            this.head.prev = null
            currentHead.next = null
        }

        this.length--
        return currentHead
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined
        }
        if (index <= this.length / 2) {
            let counter = 0
            let current = this.head
            while (counter !== index) {
                current = current.next
                counter++
            }
            return current
        } else {
            let counter = this.length - 1
            let current = this.tail
            while (counter !== index) {
                current = current.prev
                counter--
            }
            return current
        }
    }

    set(index, val) {
        let foundNode = this.get(index)

        if (foundNode) {
            foundNode.val = val
            return this
        }

        return undefined
    }

    insert(index, val) {
        if (index < 0 || index > this.length) {
            return undefined
        }

        if (index === this.length) {
            return this.push(val)
        }

        if (index === 0) {
            return this.unshift(val)
        }

        let newNode = new Node(val)
        let prevNode = this.get(index - 1)
        let nextNode = prevNode.next

        prevNode.next = newNode
        newNode.prev = prevNode
        newNode.next = nextNode
        nextNode.prev = newNode

        this.length++
        return this
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined
        }
        if (index === 0) {
            return this.shift()
        }
        if (index === this.length - 1) {
            return this.pop()
        }

        let removedNode = this.get(index)
        let prevNode = removedNode.prev
        let nextNode = removedNode.next

        prevNode.next = nextNode
        nextNode.prev = prevNode
        removedNode.next = null
        removedNode.prev = null

        this.length--
        return this
    }

    reverse() {
        let current = this.head
        let prevNode = null
        let nextNode = null

        while (current) {
            nextNode = current.next
            prevNode = current.prev

            current.next = prevNode
            current.prev = nextNode

            prevNode = current
            current = nextNode
        }

        this.tail = this.head
        this.head = prevNode

        return this
    }

    traverse() {
        let current = this.head

        while (current) {
            console.log(current.val)
            current = current.next
        }
    }
}

let doublyLinkedList = new DoublyLinkedList()
doublyLinkedList.push(1)
doublyLinkedList.push(2)
doublyLinkedList.push(3)
doublyLinkedList.reverse()

console.log(doublyLinkedList.traverse())