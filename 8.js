// Create an object representing a car with properties like make, model, and year.Add a method to the car object to start the engine

const obj = {
    make: 2019,
    model: "Suzuki"
        
}
    
obj.startEngine = function () {
    console.log("starting engine ");
}

console.log(obj);
obj.startEngine();