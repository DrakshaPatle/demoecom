import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Login from "./common/Login/login"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
// import Categories from "./components/MainPage/Categories"
import Categories from "./Categories"
import CategoryItems from "./components/CategoryItems"
import ProductDescription from "./ProductDescription"

function App() {
  const { productItems } = Data;
  const sample_prod = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
  };

  const { shopItems } = Sdata;
  const [category, setCategory] = useState(null);

  const [CartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    const productExit = CartItems.find((item) => item.id === product.id)
    if (productExit) {
      setCartItems(CartItems.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItems([...CartItems, { ...product, qty: 1 }])
    }
  }

  
  const decreaseQty = (product) => {
    const productExit = CartItems.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItems(CartItems.filter((item) => item.id !== product.id))
    } else {
      setCartItems(CartItems.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  return (
    <>
      <Router>
        <Header CartItems={CartItems} />
        <Switch>
          <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>

          <Route path='/cart' exact>
            <Cart CartItems={CartItems} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>

          <Route exact path="/login" element={<login />}>
          </Route>

          <Route exact  path="/category-items/:category">
            <CategoryItems addToCart={addToCart} ></CategoryItems>
          </Route>


          <Route exact path="/description/:id">
            <ProductDescription></ProductDescription>
          </Route>

        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
