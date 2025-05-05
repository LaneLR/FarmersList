class Cart {
    constructor(products = [], total = 0) {
        this.products = products;
        this.total = total;
    }

    addProduct(product, quantity) {
        console.log(product.quantity, this.total)
        if(quantity > product.quantity){
         return console.log( `I'm sorry there are only ${quantity} of this product left`) 
        }
        
        this.total += (product.price * quantity);
        product.quantity -= quantity;
        this.products.push(product)
        if(product.quantity === 0){
            product.inStock = false
        }
        console.log(product.quantity, this.total)
    }

    removeProduct(index) {
        if (index >= 0 && index < this.products.length) {
            const removed = this.products.splice(index, 1)[0]
            this.total -= removed.price
        }
    }

    getTotal() {
        console.log(this.total)
        return this.total;
    }

    clear(){
        this.products = []
        this.total = 0
        console.log(this.total)
        console.log(this.products)
        return this.total
    }

    removeItemByName(name) {
        const index = this.products.findIndex(product => product.name === name);
        console.log(`PRODUCTS: ${this.products}, TOTAL: ${this.total}`)
        if (index !== -1) {
            const removed = this.products.splice(index, 1)[0]
            this.total -= removed.price;
            console.log(`PRODUCTS: ${this.products}, TOTAL: ${this.total}`)
        }
    }
}

module.exports = Cart;