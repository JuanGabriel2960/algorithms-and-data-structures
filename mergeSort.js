/*
    Implement a function called mergeSort,
    that accepts an array and returns the array
    sorted. Break up the array into halves until you
    have arrays that are empty or have one element.
*/

// O(n log n)
const mergeSort = (array) => {
    if (array.length <= 1) {
        return array
    }

    let mid = Math.floor(array.length / 2)
    let left = mergeSort(array.slice(0, mid))
    let rigth = mergeSort(array.slice(mid))
    return merge(left, rigth)
}

const merge = (array1, array2) => {
    let results = []
    let i = 0
    let j = 0
    while (i < array1.length && j < array2.length) {
        if (array2[j] > array1[i]) {
            results.push(array1[i])
            i++
        } else {
            results.push(array2[j])
            j++
        }
    }
    while (i < array1.length) {
        results.push(array1[i])
        i++
    }
    while (j < array2.length) {
        results.push(array2[j])
        j++
    }

    return results
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]))