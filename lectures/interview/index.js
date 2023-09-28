// Create a faction that takes an array of numbers, and target number. Check if two numbers can be added and get the target sum. Do not use nested arrays, includes, indexOf methods. Use objects. [1, 4, 5, 7], 8 => false   [1,3,7,8,0,4], 7 => true

function isArraySumTarget(numbers, target) {
    const differences = {};
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        let difference = target - num;

        if (differences[num]) {
            return true;
        } else {
            differences[difference] = true;
        }
    }

    return false;
}
let numbers = [7, 3, 4, 5, 8];
let target = 10;
console.log(isArraySumTarget(numbers, target));
// 4,false, add 6 to the object
// 2, false, add 8,
// 3, false, add 7,
// 0, false, add 10,
// 6, true, return  true
