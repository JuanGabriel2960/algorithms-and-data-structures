/*
    Write a function called sumZero which accepts a sorted
    array of integers. The function should find the first pair
    where the sum is 0. Return an array that includes both
    values that sum to zero or undefined if a pair does not exist.
*/

// O(N^2)
const sumZero = (array) => {
    for (let i = 0; i < array.length; i++) {

        for (let j = 1; j < array.length; j++) {
            if (array[i] + array[j] === 0 && i != j) {
                return [array[i], array[j]]
            }
        }

    }

    return undefined
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))

// O(N)
const sumZero2 = (array) => {
    let left = 0
    let right = array.length - 1

    while (left < right) {
        let sum = array[left] + array[right]
        if (sum === 0) {
            return [array[left], array[right]]
        } else if (sum > 0) {
            right--
        } else {
            left++
        }
    }

    return undefined
}

console.log(sumZero2([-3, -2, -1, 0, 1, 2, 3]))