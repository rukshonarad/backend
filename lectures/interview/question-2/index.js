// Input {} => Valid
// Input {{{}}{}} => Valid
// Input { => Not Valid
// Input } => Not Valid
// Input {{} => Not Valid
// Input '' => Not Valid

// Create a Function that takes braces as string, and returns true if braces are valid, otherwise false.

// Hint. Use Array, push, and pop methods

const isValidCurlyBraces = (braceStr) => {
    let opening = "{";
    let result = [];
    for (const brace of braceStr) {
        if (brace === opening) {
            result.push(brace);
        } else {
            const lastOpening = result.pop();
            if (lastOpening === undefined) {
                return false;
            }
        }
    }
    return result.length === 0;
};
console.log(isValidCurlyBraces("{}"));
console.log(isValidCurlyBraces("}"));
