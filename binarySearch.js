/*
    Implement a function called binarySearch, that
    accepts an sorted array and a value and returns
    the index where the value passed to the function
    is located. If the value is not found, return -1.
*/

// O(Log(N))
const binarySearch = (array, value) => {
    let min = 0
    let max = array.length - 1

    while (min <= max) {
        let middle = Math.floor((min + max) / 2)

        if (array[middle] < value) {
            min = middle + 1
        } else if (array[middle] > value) {
            max = middle - 1
        } else {
            return middle
        }
    }

    return -1
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28], 15))