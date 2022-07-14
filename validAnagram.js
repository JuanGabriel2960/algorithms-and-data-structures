/*
    Given two strings, write a function to determine if
    the second string is and anagram of the first. An
    anagram is a word, phrase, or name formed by rearranging
    the letters of another, such as cinema, formed from iceman.
*/

// O(N^2)
const validAnagram = (str1, str2) => {
    let string2 = str2.split("")

    for (let i = 0; i < str1.length; i++) {
        let indexFound = string2.indexOf(str1[i])

        if (!string2.includes(str1[i])) {
            return false
        }

        string2.splice(indexFound, 1)
    }

    return true
}

console.log(validAnagram('texttwisttime', 'timetwisttext'))

// O(N)
const validAnagram2 = (str1, str2) => {
    let obj1 = {}
    let obj2 = {}

    for (let i = 0; i < str1.length; i++) {
        if (obj1[str1[i]]) {
            obj1[str1[i]] += 1
        } else {
            obj1[str1[i]] = 1
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (obj2[str2[i]]) {
            obj2[str2[i]] += 1
        } else {
            obj2[str2[i]] = 1
        }
    }

    for (let key in obj1) {
        if (obj1[key] != obj2[key]) {
            return false
        }
    }

    return true
}

console.log(validAnagram2('texttwisttime', 'timetwisttext'))

// O(N)
const validAnagram3 = (str1, str2) => {
    let lookup = {}

    for (let i = 0; i < str1.length; i++) {
        if (lookup[str1[i]]) {
            lookup[str1[i]] += 1
        } else {
            lookup[str1[i]] = 1
        }
    }

    for (let j = 0; j < str2.length; j++) {
        if (lookup[str2[j]]) {
            lookup[str2[j]] -= 1
        } else {
            return false
        }
    }

    return true
}

console.log(validAnagram3('texttwisttime', 'timetwisttext'))