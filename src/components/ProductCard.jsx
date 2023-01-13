import React, { useState, useEffect } from "react"
import { useParams } from "react-router";
import API from "./API";
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom";
// import "./ProductCard.css"
// import 'bootstrap/dist/css/bootstrap.css';
// import Button from '@material-ui/core/Button'; 


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
                        <div class="card-group">
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
                            </div>
                    </>
                )
            })}
        </>
    )
}

export default FlashCard























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