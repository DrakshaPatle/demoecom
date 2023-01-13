import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import API from "./components/API";
import "./ProductDescription.css"

const ProductDescription = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({
        id: null,
        description: null,
        title: null,
        price: null,
        discountPercentage: null,
        rating: null,
        stock: null,
        brand: null,
        category: null,
        thumbnail: null,
        images: null,
    });

    useEffect(() => {
        if (product.title == null) {
            const response = API.get(`/products/${id}`).then((response) => { setProduct(response.data) })
        }
        console.log(product);
    })
    // return <></>;
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card remmagin18">
                            <img src={product.thumbnail} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">{product.title}</h5>
                                    <p class="card-text">{product.description}</p>
                                    <a href="#" class="btn btn-primary">Add to Cart</a>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${product.price}</h5>
                                <p class="card-text">{product.description}</p>
                                <a href="#" class="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDescription;