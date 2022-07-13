/*
    Implement a function called countUniqueValues,
    which accepts a sorted array, and counts the
    unique values in the array. There can be negative
    numbers in the array, but it will always be sorted.
*/

// O(N^2)
const countUniqueValues = (array) => {
    let unique = []

    for (let i = 0; i < array.length; i++) {

        if (!unique.includes(array[i])) {
            unique.push(array[i])
        }

    }

    return unique.length
}

console.log(countUniqueValues([-2, -1, -1, 0, 1]))

// O(N)
const countUniqueValues2 = (array) => {
    let left = 0

    for (let right = 1; right < array.length; right++) {
        if (array[left] !== array[right]) {
            left++
            array[left] = array[right]
        }
    }

    return left + 1
}

console.log(countUniqueValues2([-2, -1, -1, 0, 1]))