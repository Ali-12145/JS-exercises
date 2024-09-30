// Implement a private variable using closures.

function createCounter() {
    let count = 0;
    function increment() {
        count++;
        console.log("increment counter", count);
    }

    return {
        incrementCounter:function(){
        increment();
        },
        getCount:function() {
            return count;
        }
    }
}

const counter = createCounter();
console.log(counter.getCount());
counter.incrementCounter();
console.log(counter.getCount());