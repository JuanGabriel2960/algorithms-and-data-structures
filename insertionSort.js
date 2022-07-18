/*
    Implement a function called insertionSort,
    that accepts an array and returns the array
    sorted. Start by picking the second element and
    compare with the one before it and swap if necessary.
*/

// O(N^2)
const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        let current = array[i]
        for (var j = i - 1; j >= 0 && array[j] > current; j--) {
            array[j + 1] = array[j]
        }
        array[j + 1] = current
    }

    return array
}

console.log(insertionSort([2, 1, 9, 76, 4]))