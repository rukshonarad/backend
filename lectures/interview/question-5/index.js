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
