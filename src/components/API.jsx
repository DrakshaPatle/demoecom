import axios from "axios";
let config = {
    baseURL : 'https://dummyjson.com'
}
const API = axios.create(config)

// alreadyusing = {
//     id: 1, //
//     discount: 50, // discountPercentage
//     cover: "./images/flash/flash-1.png", //thumbnail
//     name: "Shoes", // title
//     price: 100, //
// }

// b = {
//     "id": 1,
//     "title": "iPhone 9",
//     "description": "An apple mobile which is nothing like apple",
//     "price": 549,
//     "discountPercentage": 12.96,
//     "rating": 4.69,
//     "stock": 94,
//     "brand": "Apple",
//     "category": "smartphones",
//     "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//     "images": [
//         "https://i.dummyjson.com/data/products/1/1.jpg",
//         "https://i.dummyjson.com/data/products/1/2.jpg",
//         "https://i.dummyjson.com/data/products/1/3.jpg",
//         "https://i.dummyjson.com/data/products/1/4.jpg",
//         "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
//     ]
// }


export default API;