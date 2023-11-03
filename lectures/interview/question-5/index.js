// Create a function, that takes a string, each char of string is brace, <(){}[]>. You have to return true if Braces are valid, otherwise false.
// "{}[()]" => Valid
// "[}" => Not Valid
// "[{]}" => No Valid
// "{{}}[()](" => Not Valid
const isValidBrace = (str) => {
    const opening = "{([";
    const closing = "})]";

    let result = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (opening.includes(char)) {
            result.push(char);
        } else {
            const lastChar = result.pop();
            if (opening.indexOf(lastChar) !== closing.indexOf(char)) {
                return false;
            }
        }
    }
    return result.length === 0;
};

console.log(isValidBrace("{}[()]"));
console.log(isValidBrace("[}"));
console.log(isValidBrace("[})"));
console.log(isValidBrace("(){}[]"));

// Construct a function that counts the number of vowels in a string.

const countVowels = (str) => {
    let count = 0;
    let vowels = "aeiou";
    for (const char of str) {
        if (vowels.includes(char)) count++;
    }
    return { vovels: count, consonantnts: str.length - count };
};

console.log(countVowels("apple"));

// [1,2,3,4,5,6,7,8,9,10]
// Sum up array. but do not use loop
// 1, 2, 3 = 6; 3 * 4 / 2 = 6
// 1, 2, 3, 4 = 10; 4 * 5 / 2 = 10
// 1, 2, 3, 4, 5 = 15; 5 * 6  / 2 = 15;

// (n * (n +1) )/2

const sumUpArr = (arr) => {
    return (arr.length * (arr.length + 1)) / 2;
};
console.log(sumUpArr([1, 2, 3, 4]));
