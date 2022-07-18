/*
    Implement a function called bubbleSort,
    that accepts an array and returns the array sorted.
    If array[j] is greater than array[j+1], swap those
    values.
*/

// O(N^2)
const bubbleSort = (array) => {
    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }

    return array
}

console.log(bubbleSort([37, 45, 29, 8, 12, -1]))

// O(N^2)
const bubbleSort2 = (array) => {
    let noSwaps = true
    for (let i = array.length; i > 0; i--) {
        noSwaps = true
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
                noSwaps = false
            }
        }
        if (noSwaps) {
            break
        }
    }

    return array
}

console.log(bubbleSort2([37, 45, 29, 8, 12, -1]))