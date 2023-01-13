import React from "react"
import "./Header.css"
import Head from "./Head"
import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ CartItems }) => {
  return (
    <>
      <Head />
      <Search CartItems={CartItems} />
      <Navbar />
    </>
  )
}

export default Header
