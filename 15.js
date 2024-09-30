// Remove all occurrences of a specific element from an array.

function remove(numsArr, num) {
    const result = numsArr.filter(nums => nums!==num&&nums
    )
    return result;
}

console.log(remove([2, 4, 5, 62, 23, 2, 11], 2));