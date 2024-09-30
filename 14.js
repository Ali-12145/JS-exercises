// Find the largest element in an array using the `reduce()` method.


function findLargest(nums) {
    return nums.reduce((prev, current) =>
        prev > current ? prev : current
    )
    
}

let x = [2, 4, 3, 56, 221, 3];
let reduce = findLargest(x);

console.log(reduce);