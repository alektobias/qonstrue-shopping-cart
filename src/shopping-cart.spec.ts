import { beforeEach, describe, expect, test } from "bun:test"
import { Product, ShoppingCart } from "./shopping-cart"

describe("Shopping Cart", () => {
  const testProduct: Product = { id: "1", name: "Dove Soap", unitValue: 39.99, quantity: 5 }
  let shoppingCart: ShoppingCart;
  beforeEach(() => {
    shoppingCart = new ShoppingCart()
  })
  test("Add products to the shopping cart.", () => {


    shoppingCart.addProduct(testProduct)

    expect(shoppingCart.cart.products).toEqual({ [testProduct.id]: testProduct })
    expect(shoppingCart.cart.totalPrice).toEqual(199.95)


  })
  test("Add additional products of the same type to the shopping cart.", () => {

    shoppingCart.addProduct(testProduct)
    shoppingCart.addProduct({ ...testProduct, quantity: 3 })

    expect(shoppingCart.cart.products).toEqual({ [testProduct.id]: { ...testProduct, quantity: 8 } })
    expect(shoppingCart.cart.totalPrice).toEqual(319.92)
  })
  test("Calculate the tax rate of the shopping cart with multiple items", () => { })
})