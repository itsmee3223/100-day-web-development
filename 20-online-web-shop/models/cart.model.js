class Cart {
  constructor(items = [], totalQuantity = 0, totalPirce = 0){
    this.items = items
    this.totalQuantity = totalQuantity
    this.totalPirce = totalPirce
  }

  addItem(product) {
    const cartItem = {
      product: product,
      quantity: 1,
      totalPirce: product.price
    }
    for (let index = 0; index < this.items.length; index++) {
      const item = this.items[index];
      if(item.product.id === product.id)
      {
        cartItem.quantity = cartItem.quantity + 1
        cartItem.totalPirce = cartItem.totalPirce + product.price
        this.items[i] = cartItem
        this.totalQuantity++;
        this.totalPirce += product.price
        return
      }
    }
    this.items.push(cartItem)

  }
}

module.exports = Cart