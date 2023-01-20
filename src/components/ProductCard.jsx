import React, { useState, useEffect } from "react"
import { useParams } from "react-router";
import API from "./API";
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom";
import "./ProductCard.css"
// import 'bootstrap/dist/css/bootstrap.css';
// import Button from '@material-ui'; 
import { wishlistCollectionRef } from "../firebaseconfig";
import { doc, arrayUnion, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseconfig";

const ProductCard = ({ setMsg, product, key, addToCart }) => {

    const [count, setCount] = useState(0);

    const handleOnAddtoWishList = async () => {

        console.log("hello woeld")
        const wishlistRef = doc(db, "wishlist", "wishlist");
        await updateDoc(wishlistRef, {
            wishlist_items: arrayUnion(product.id)
        });

    }


    const increment = () => {
        setCount(count + 2)
    }
    // return (
    //     <div className="page">
    //         <div className="r">
    //             <div className="c">
    //                 <div className="image-page">
    //                     <img className="thumbnail" src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt="" />
    //                 </div>
    //                 <div className="desc-page">
    //                     <div className="left-card-desc">
    //                         <div className="prod-name">
    //                             Apple Iphone 14
    //                         </div>
    //                         <div className="prod-price">
    //                             $1200
    //                         </div>
    //                         <div className="prod-rating">
    //                             <i className="fa-solid fa-star"></i>
    //                             <i className="fa-solid fa-star"></i>
    //                             <i className="fa-solid fa-star"></i>
    //                             <i className="fa-solid fa-star"></i>
    //                             <i className="fa-solid fa-star"></i>
    //                         </div>
    //                     </div>
    //                     <div className="add-to-cart-page">
    //                         <i className="fa-solid fa-plus-square"></i>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="c">
    //                 <div className="image-page">
    //                     <img className="thumbnail" src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt="" />
    //                 </div>
    //                 <div className="desc-page">
    //                     <div className="left-card-desc">
    //                         <div className="prod-name">
    //                             Apple Iphone 14
    //                         </div>
    //                         <div className="prod-price">
    //                             $1200
    //                         </div>
    //                         <div className="prod-rating">
    //                             <i className="fa-solid fa-star"></i>
    //                             <i className="fa-solid fa-star"></i>
    //                             <i className="fa-solid fa-star"></i>
    //                             <i className="fa-solid fa-star"></i>
    //                             <i className="fa-solid fa-star"></i>
    //                         </div>
    //                     </div>
    //                     <div className="add-to-cart-page">
    //                         <i className="fa-solid fa-plus-square"></i>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )




    return (
        <>
            <div className="grid-container" onClick={handleOnAddtoWishList}>
                <br />
                <br />
                <br />
                {key}
                <br />
                <br />
                <br />
                <div className='box'>
                    <div className='product mtop'>
                        <div className='img'>
                            <span className='discount'>{product.discountPercentage}% Off</span>
                            <Link to={`/description/${product.id}`}>
                                <img src={product.thumbnail} className="thumbnail" />
                            </Link>
                            <div className="key">{key}</div>
                            <div className='product-like'>
                                <label>{count}</label> <br />
                                <i className='fa-regular fa-heart' onClick={increment}></i>
                            </div>
                        </div>


                        <div className='product-details'>
                            <h3>{product.title}</h3>
                            <div className='rate'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                            </div>


                            <div className='price'>
                                <h4>${product.price}.00 </h4>


                                <button onClick={() => addToCart(product)}>
                                    <i className='fa fa-plus-square'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard;























{/* <div class="card-group">
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>


  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>


  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div> */}