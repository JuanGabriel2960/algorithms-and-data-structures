/*
    Suppose we want to write a function that
    calculates the sum of all numbers from 1 up to
    (and including) some number n.
*/

// O(N)
const addUpto = (n) => {
    let sum = 0;

    for (let i = 0; i <= n; i++) {
        sum += i
    }

    return sum
}

console.log(addUpto(5217))

// O(1)
const addUpto2 = (n) => {
    return n * (n + 1) / 2
}

console.log(addUpto2(5217))