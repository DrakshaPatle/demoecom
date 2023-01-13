import React, { useState, useEffect } from "react"
import { useParams } from "react-router";
import API from "./API";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom";

const FlashCard = ({ addToCart }) => {


    const { category } = useParams();
    const [productsList, setProductsList] = useState([]);
    const products_route = "/products/category/" + category;
    useEffect(() => {
        if (productsList.length == 0) {
            const response = API.get(products_route).then(response => setProductsList(response.data.products));
        }
    })


    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 2)
    }

    return (
        <>
            {productsList.map((product) => {
                return (
                    <>
                        

                            <div className='box'>
                                <div className='product mtop'>
                                    <div className='img'>
                                        <span className='discount'>{product.discountPercentage}% Off</span>
                                        <Link to={`/description/${product.id}`}>
                                        <img src={product.thumbnail} alt='' />
                                        </Link>
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
                                                <i className='fa fa-plus'></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </>
                )
            })}
        </>
    )
}

export default FlashCard
