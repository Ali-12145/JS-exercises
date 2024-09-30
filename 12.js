//  Write a function that takes an array of numbers and returns a new array with only the even numbers.

function evenRet(nums) {
    let newArr = [];
    for (let i = 0; i < nums.length; i++){
        nums[i] % 2 === 0 && newArr.push(nums[i]);
    }
    return newArr;
}

let x = [2, 4, 5, 3, 6, 5];

console.log(evenRet(x));