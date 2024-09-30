// Create a function that displays the current date and time in a specific format.

function displayTime() {
    const time = new Date();
    console.log(time.toLocaleString());
}
displayTime();