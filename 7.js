// Find the sum of all elements in an array.

function sumAll(arr) {
    let sum = 0;
    for (a of arr) {
        sum += a;
    }
    return sum;
}

console.log(sumAll([1, 2, 3]));