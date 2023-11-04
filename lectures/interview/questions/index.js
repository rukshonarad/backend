// // Create a function that takes two sorted array (asc) with the same length. Merge them in one array and return it. Catch is here: returning array should be sorted as well. do not use sort() method.
// [1, 4, 6, 10, 100], [3, 4, 10, 12, 101]
// [1, 3, 4, 4, 6, 10, 10, 12, 100, 101 ]

// [1, 4, 6, 10, 100], [3, 4, 11, 12, 101]
// [1, 3, 4, 4, 6, 10, 11, 12, 100, 101 ]

const sortedArray = (arr1, arr2) => {
    const sortArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length) {
        if (arr1[i] < arr2[j]) {
            sortArr.push(arr1[i]);
            i++;
        } else {
            {
                sortArr.push(arr2[j]);
                j++;
            }
        }
    }
    return sortArr;
};

console.log(sortedArray([1, 4, 6, 10, 100], [3, 4, 10, 12, 101]));

console.log("--------------------");

// Create a function that checks if a given string is a palindrome (the same forwards and backwards).
// Input: hello => output: false
// Input: rotetor => output: true

// const isPalindrome = (str) => {
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] !== str[str.length - i - 1]) {
//             return false;
//         }
//     }
//     return true;
// };

// console.log(isPalindrome("rotetor"));
// console.log(isPalindrome("hello"));

// Develop a function that determines if two strings are anagrams of each other. Return true if anagrams, else false.

// e.g ("secure", "rescue")

// secure   =>  rescue

//HELLO, ELLOH\
// APPLE, LEAPP
// PULLS, PULLR

const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    str1Count = {};
    str2Count = {};

    for (const char of str1) {
        if (str1Count[char]) {
            str1Count[char]++;
        } else {
            str1Count[char] = 1;
        }
    }

    for (const char of str2) {
        if (str2Count[char]) {
            str2Count[char]++;
        } else {
            str2Count[char] = 1;
        }
    }

    for (const char in str1Count) {
        if (str1Count[char] !== str2Count[char]) {
            return false;
        }
    }
    return true;
};

console.log(isAnagram("secure", "rescue"));
console.log("--------------------");

//Write a function that removes duplicates from an array AND RETURN UNIQUE ARRAY
// [1,2,3,1,2,5,5] [1,2,3,5]
// 1. Create an empty array, unique
// 2. Loop the argument array
//3. Check if unique has current element of argument array, if it has already, do not push, if it does NOT have it, then push
// return unique array
function removeDuplicates(arr) {
    let unique = [];

    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];
        if (!unique.includes(number)) {
            unique.push(number);
        }
    }
    return unique;
}
console.log(removeDuplicates([1, 2, 3, 1, 2, 5, 5]));
console.log("--------------------");

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log("--------------------");
console.log(isPalindrome("a x a"));
console.log(isPalindrome("racecar"));

// Write a function that converts an array of strings into an array of objects with a property 'value' that contains the original string.

// [a, b, c], => [{value: a}, {value: b}, {value:c}];

const convertToObjArr = (strings) => {
    const arr = [];

    for (const str of strings) {
        arr.push({ value: str });

        return arr;
    }
};
console.log(convertToObjArr(["a", "b", "c"]));
// return strings.reduce((acc, ele) => {
//   acc.value = ele;
//   return acc;
// }, {})

// Given an number of  array. Linear array.
// [1,2,4,5,6,7,8] => 3
// [1,2,3,....., 67,68,70.....100] => 69.
// Numbers are are always positive.
const findMissingNumber = (num) => {
    let count = 0;
    for (let i = 1; i <= num.length; i++) {
        if (!num.includes(i)) {
            count = i;
        }
    }
    return count;
};
console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 7]));
console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 7, 9, 10]));
console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13]));

// Given a number. Sum up the digits
// 1234 => 10
// 4589 => 26
// 8978 => 32.
// COndition : Do not convert number to string and loop.

const sumUpTheDigits = (num) => {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    return sum;
};

console.log(sumUpTheDigits(1234));
