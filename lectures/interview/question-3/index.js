// Input [1, 6, 3, 9, 0, -10, 100]
// [100, 9]
// Create a function that takes an array of numbers. Return two largest one in array [firstLargest, secondLargest];

const printTwoLargeNum = (arr) => {
    let firsLarge = 0;
    let secondLarge = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firsLarge) {
            secondLarge = firsLarge;
            firsLarge = arr[i];
        }
    }
    return [firsLarge, secondLarge];
};
console.log(printTwoLargeNum([1, 3, 6, 9, 45, 9, 78, -46, 90]));
