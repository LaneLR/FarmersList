// Import Classes Here
const Product = require("./Product")
const Cart = require("./Cart")
const Customer = require("./Customer");
const Auth = require("./Auth");


const cart1 = new Cart()
const newProd = new Product("Apple", 12, "An apple", 1.2, 10);
const newProd2 = new Product("Mango", 20, "A mango", 2.0, 7);
cart1.addProduct(newProd, 5);
cart1.addProduct(newProd2, 2);
cart1.getTotal()

const cart2 = new Cart();
const newProd3 = new Product("Pear", 15, "A pear", 1.5, 10);
const newProd4 = new Product("Orange", 30, "An orange", 3.0, 7);
cart2.addProduct(newProd3, 10);
cart2.addProduct(newProd4, 10);


const customer = new Customer("John", "John@gmail", "123 John Ln");
customer.addToOrderHistory(cart1);
customer.addToOrderHistory(cart2);

customer.getRewardPoints();

cart2.removeItemByName('Pear')




// cart1.clear()











// DO NOT EDIT BELOW THIS LINE
try {
    module.exports = {
        Product,
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart,
        Customer
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart,
        Customer,
        Auth
    }
} catch(e){

}