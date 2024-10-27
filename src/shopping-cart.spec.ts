import { beforeEach, describe, expect, test } from "bun:test"
import { Product, ShoppingCart } from "./shopping-cart"

describe("Shopping Cart", () => {
  const DoveSoapTestProduct: Product = { id: "1", name: "Dove Soap", unitValue: 39.99, quantity: 5 }
  const AxeDeoTestProduct: Product = { id: '2', name: 'Axe Deo', unitValue: 99.99, quantity: 2 }
  let shoppingCart: ShoppingCart;
  beforeEach(() => {
    shoppingCart = new ShoppingCart()
  })
  test("Add products to the shopping cart.", () => {


    shoppingCart.addProduct(DoveSoapTestProduct)

    expect(shoppingCart.cart.products).toEqual({ [DoveSoapTestProduct.id]: DoveSoapTestProduct })
    expect(shoppingCart.cart.totalPrice).toEqual(199.95)


  })
  test("Add additional products of the same type to the shopping cart.", () => {

    shoppingCart.addProduct(DoveSoapTestProduct)
    shoppingCart.addProduct({ ...DoveSoapTestProduct, quantity: 3 })

    expect(shoppingCart.cart.products).toEqual({ [DoveSoapTestProduct.id]: { ...DoveSoapTestProduct, quantity: 8 } })
    expect(shoppingCart.cart.totalPrice).toEqual(319.92)
  })
  test("Calculate the tax rate of the shopping cart with multiple items", () => {
    shoppingCart.addProduct({ ...DoveSoapTestProduct, quantity: 2 })
    shoppingCart.addProduct(AxeDeoTestProduct)

    expect(shoppingCart.cart.products).toEqual({ [DoveSoapTestProduct.id]: { ...DoveSoapTestProduct, quantity: 2 }, [AxeDeoTestProduct.id]: AxeDeoTestProduct })
    expect(shoppingCart.cart.salesTax).toEqual(35)
    expect(shoppingCart.cart.totalPriceWithTax).toEqual(314.96)
  })
})