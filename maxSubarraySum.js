/*
    Write a function called maxSubarraySum which accepts
    an array of integers and a number called n. The function
    should calculate the maximum sum of n consecutive
    elements in the array.
*/

// O(N^2)
const maxSubarraySum = (array, n) => {
    let max = -Infinity

    for (let i = 0; i < array.length - n + 1; i++) {
        temp = 0

        for (let j = 0; j < n; j++) {
            temp += array[i + j]
        }

        if (temp > max) {
            max = temp
        }
    }

    return max
}

console.log(maxSubarraySum([4, 2, 1, 6, 2], 4))

// O(N)
const maxSubarraySum2 = (array, n) => {
    let maxSum = 0
    let tempSum = 0

    for (let i = 0; i < n; i++) {
        maxSum += array[i]
    }

    tempSum = maxSum

    for (let i = n; i < array.length; i++) {
        tempSum = tempSum - array[i - n] + array[i]
        maxSum = Math.max(maxSum, tempSum)
    }

    return maxSum
}

console.log(maxSubarraySum2([4, 2, 1, 6, 2], 4))