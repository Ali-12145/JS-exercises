// Create a program that checks if a given year is a leap year.

function checkYear(year) {
    if (year % 4 === 0) {
        console.log("leap Year");
    } else if (year % 100 === 0 && !year % 400) console.log("not leap")
    else console.log("Leap yr")
}

checkYear(1996);