// Create a prototype for a Product object with properties like name, price, and quantity. Add a method to the Product prototype to calculate the total value.
const product = {
    name: "Phone",
    price: 200,
    quantity: 2,
    
    calculateTotal() {
        return this.price * this.quantity;
    }
}

console.log(product.calculateTotal());