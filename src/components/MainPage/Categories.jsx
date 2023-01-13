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

  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Fashion",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Electronic",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Cars",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Home & Garden",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Gifts",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Music",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Health & Beauty",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Pets",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Baby Toys",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Groceries",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Books",
    },
  ]

  // return (
  //   <>
  //     <div className='category'>
  //       {data.map((value, index) => {
  //         return (
  //           <div className='box f_flex' key={index}>
  //             {/* <img src={value.cateImg} alt='' /> */}
  //             <span>{value.cateName}</span>
  //           </div>
  //         )
  //       })}
  //     </div>
  //   </>
  // )


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
