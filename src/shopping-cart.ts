
export interface Product {
  id: string;
  name: string
  unitValue: number;
  quantity: number
}

export interface Cart {
  products: Record<string, Product>;
  totalPrice: number;
  salesTax?: number;
  totalPriceWithTax?: number;
}
export class ShoppingCart {

  private taxRate = 0.125;

  constructor(public cart: Cart = { products: {}, totalPrice: 0 }) {
  }


  public addProduct(data: Product): Cart {
    const productAlreadyAdded = !!this.cart.products[data.id]

    if (productAlreadyAdded) {
      this.cart.products[data.id].quantity += data.quantity
    }
    else {
      this.cart.products[data.id] = data
    }

    const productsPrice = Object.values(this.cart.products).reduce((total, product) => total + product.unitValue * product.quantity, 0)


    this.cart.totalPrice = Number(productsPrice.toFixed(2))
    this.cart.salesTax = Number((this.cart.totalPrice * this.taxRate).toFixed(0))
    this.cart.totalPriceWithTax = Number((this.cart.totalPrice + this.cart.salesTax).toFixed(2))
    
    return this.cart;
  }

}

