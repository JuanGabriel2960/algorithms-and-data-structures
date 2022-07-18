/*
    Implement a function called selectionSort,
    that accepts an array and returns the array sorted.
    Store the first element as the smallest value and
    comparare it to the next item until you find a smaller one.
*/

// O(N^2)
const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let lowest = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[lowest]) {
                lowest = j
            }
        }
        if (i !== lowest) {
            let temp = array[i]
            array[i] = array[lowest]
            array[lowest] = temp
        }
    }

    return array
}

console.log(selectionSort([34, 22, 10, 19, 17]))