/*
    Write a function which takes in
    a string and return counts of
    each character in the string.
*/

// O(N)
const charCount = (str) => {
    let obj = {}

    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]] += 1
        } else {
            obj[str[i]] = 1
        }
    }

    return obj
}

console.log(charCount('hello'))
