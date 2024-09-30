// Write a function that takes a string and returns the reversed version of it.

function reverse(string) {
    let x = ""
    for (let i = string.length-1; i >= 0; i--){
        x += string[i];
    }
    return x;
}
const answer = reverse("Ali raza");
console.log(answer);