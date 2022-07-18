/*
    Implement a function called quickSort, that accepts
    an array and returns the array sorted. Recursively
    call the pivot helper on the subarray to the left of
    the index, and the subarray to the right of the index.
*/

// O(n log n)
const quickSort = (array, left = 0, right = array.length - 1) => {
    if (left < right) {
        let pivotIndex = pivot(array, left, right)
        quickSort(array, left, pivotIndex - 1)
        quickSort(array, pivotIndex + 1, right)
    }

    return array
}

const pivot = (array, start = 0, end = array.length - 1) => {
    const swap = (array, idx1, idx2) => {
        [array[idx1], array[idx2]] = [array[idx2], array[idx1]]
    }

    let pivot = array[start]
    let swapIdx = start

    for (let i = start + 1; i <= end; i++) {
        if (pivot > array[i]) {
            swapIdx++
            swap(array, swapIdx, i)
        }
    }

    swap(array, start, swapIdx)
    return swapIdx
}

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]))