import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router";
import API from "./API"
import "./CategoryItems.css";
import ProductCard from "./ProductCard"

const CategoryItems = ({ addToCart }) => {
    const { category } = useParams();
    const [productsList, setProductsList] = useState([]);
    const products_route = "/products/category/" + category;
    useEffect(() => {
        if (productsList.length == 0) {
            const response = API.get(products_route).then(response => setProductsList(response.data.products));
        }
    })

    const [msg, setMsg] = useState(null);

    return (
        <>

            {msg && <div className="msg"> {msg} </div>}
            {productsList.map(product_obj => <ProductCard setMsg={setMsg} product={product_obj} key={product_obj.id} addToCart={addToCart} ></ProductCard>)}
        </>
    )
}

export default CategoryItems;