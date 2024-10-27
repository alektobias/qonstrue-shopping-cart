import { beforeEach, describe, expect, test } from "bun:test"
import { Product, ShoppingCart } from "./shopping-cart"

describe("Shopping Cart", () => {
  beforeEach(() => {

  })
  test("Add products to the shopping cart.", () => {

    const shoppingCart = new ShoppingCart()
    const testProduct: Product = { id: "1", name: "Dove Soap", unitValue: 39.99, quantity: 5 } 
    
    shoppingCart.addProduct(testProduct)

    expect(shoppingCart.cart.products).toEqual({[testProduct.id]: testProduct})
    expect(shoppingCart.cart.totalPrice).toEqual(199.95)


  })
  test("Add additional products of the same type to the shopping cart.", () => { })
  test("Calculate the tax rate of the shopping cart with multiple items", () => { })
})