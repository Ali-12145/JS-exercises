// Use `map()` to double all the elements in an array.



function doubleAll(nums) {
    let result = []
    result = nums.map(num => num * 2);
    return result;
}

let x = [2, 4, 5, 3];

console.log(doubleAll(x));