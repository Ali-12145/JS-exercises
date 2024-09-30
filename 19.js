//  Create a counter function using closures that increments and returns the count on each call.

function counterF() {
    console.log("in the main outer func");
    let counter = 1;
    return function increase () {
        console.log(counter)
        counter++;
    }

    
}

const func = counterF();
func();
func();