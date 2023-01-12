import React from "react"
// import ProductList from "./ProductList"
import "./Home.css"
import SliderHome from "./Slider"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          {/* <ProductList /> */}
          <SliderHome />
        </div>
      </section>
    </>
  )
}

export default Home
