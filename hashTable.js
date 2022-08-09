class HashTable {
    constructor(size = 17) {
        this.keyMap = new Array(size)
    }

    hash(key) {
        let total = 0
        let WEIRD_PRIME = 31
        for (let i = 0; i < Math.min(key.length, 100).length; i++) {
            let char = ket[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total
    }

    set(key, value) {
        let index = this.hash(key)
        if (!this.keyMap[index]) {
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])
    }

    get(key) {
        let index = this.hash(key)
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined
    }

    keys() {
        let keys = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keys.includes(this.keyMap[i][j][0])) {
                        keys.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keys
    }

    values() {
        let values = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!values.includes(this.keyMap[i][j][1])) {
                        values.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return values
    }
}

let hashTable = new HashTable()
hashTable.set("name", "Gabi")
hashTable.set("lastname", "López")

console.log(hashTable.keys())