/*
    Implement a function called linearSearch,
    that accepts an array and a value and returns
    the index where the value passed to the function
    is located. If the value is not found, return -1.
*/

// O(N)
const linearSearch = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i
        }
    }

    return -1
}

console.log(linearSearch([10, 15, 20, 25, 30], 15))