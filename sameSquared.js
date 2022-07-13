/*
    Write a function called sameSquared, which accepts two arrays.
    The function should return true if every value in the
    array has it's corresponding value squared in the second
    array. The frequency of values must be the same.
*/

// O(N^2)
const sameSquared = (array, array2) => {
    for (let i = 0; i < array.length; i++) {
        let indexFound = array2.indexOf(array[i] ** 2)

        if (indexFound === -1) {
            return false
        }

        array2.splice(indexFound, 1)
    }

    return true
}

console.log(sameSquared([1, 2, 3], [4, 1, 9]))

// O(N)
const sameSquared2 = (array, array2) => {
    let obj = {}
    let obj2 = {}

    for (let i = 0; i < array.length; i++) {
        if (obj[array[i]]) {
            obj[array[i]] += 1
        } else {
            obj[array[i]] = 1
        }
    }

    for (let j = 0; j < array2.length; j++) {
        if (obj2[array2[j]]) {
            obj2[array2[j]] += 1
        } else {
            obj2[array2[j]] = 1
        }
    }

    for (const key in obj) {
        if (obj[key] !== obj2[key ** 2]) {
            return false
        }
    }

    return true
}

console.log(sameSquared2([1, 2, 3, 2], [9, 1, 4, 4]))
