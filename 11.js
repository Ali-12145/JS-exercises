// Create a function that generates a random number between a given range.

function randomNum(start, end) {
    let random = start + Math.random() * (end - start);
    return Math.floor(random);
}

console.log(randomNum(4, 9));

