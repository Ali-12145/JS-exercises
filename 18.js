// Write a recursive function to calculate the factorial of a given number.

function findFac(num) {
    if (num === 0) {
        return 1;
    }
    return num* findFac(num - 1);
}


console.log(findFac(4));