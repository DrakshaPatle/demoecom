import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router";
import API from "./API"
import "./CategoryItems.css";
import ProductCard from "./ProductCard" 

const CategoryItems = ({addToCart}) => {
    const { category } = useParams();
    const [productsList, setProductsList] = useState([]);
    const products_route = "/products/category/" + category;
    useEffect(() => {
        if (productsList.length == 0) {
            const response = API.get(products_route).then(response => setProductsList(response.data.products));
        }
    })
    return (
        productsList.map((product_obj) =>
            <ProductCard addToCart={addToCart} ></ProductCard>
        )
    )
}

export default CategoryItems;