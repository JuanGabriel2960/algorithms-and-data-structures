/*
    Given a sorted array of integers, write a function
    called search, that accepts a value and returns the
    index where the value passed to the function is
    located. If the value is not found, return -1.
*/

// O(N)
const search = (array, n) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            return i
        }
    }

    return -1
}

console.log(search([1, 2, 3, 4, 5, 6], 4))

// Log(N) - binary seach
const search2 = (array, n) => {
    let min = 0
    let max = array.length - 1

    while (min <= max) {
        let middle = Math.floor((min + max) / 2)
        let currentElement = array[middle]

        if (array[middle] < n) {
            min = middle + 1
        } else if (array[middle] > n) {
            max = middle - 1
        } else {
            return middle
        }
    }

    return -1
}

console.log(search2([1, 2, 3, 4, 5, 6], 4))