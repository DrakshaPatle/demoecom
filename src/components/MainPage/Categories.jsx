import React, { useEffect, useState } from "react"
import API from "../API";
import { Link } from 'react-router-dom'

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if (categories.length == 0) {
      const response = API.get("/products/categories/").then(response => setCategories(response.data))
    }
  })

 


  return (
    <>
      <div className='category'>
        {categories.map((category, index) => {
          return (
            <div className='box f_flex' key={index}>
              <span>
                <Link to={`category-items/${category}`}>
                  {category}
                </Link>
              </span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories






// import  React ,{useState,usEffect}
//  from 'react'
// import { useEffect } from "react"
//  export default function Reg(){
//   const [productList,setProductList]= useState([]);
// useEffect(()=>{
//   axios.get('https://fakestoreapi').then(res=>res.json()).then(products)=>{
//     console.log(products);
//     setProductList(productList);
//   }).catch()

//  },[])
//  return (
//   <div>
//     productlist.map((product))=>{

//       return<div key ={product.url}>

//       </div>
//     }
//   </div>
//  )




// })



//  }
