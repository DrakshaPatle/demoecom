// import { useState } from "react"
// import { useEffect } from "react"
// import API from "./components/API";
// import "./Categories.css";
// import { Link } from 'react-router-dom'


// const Categories = () => {
//     const [categories, setCategories] = useState([]);
//     useEffect(() => {
//         if (categories.length == 0) {
//             const response = API.get("/products/categories/").then(response => setCategories(response.data))
//         }
//     })
//     return categories.map((category) =>
//         <div className="list-container">
//             <ul>
//                 <li>
//                     <Link to={`category-items/${category}`}>
//                     {category}
//                     </Link>
//                 </li>
//             </ul>
//          </div>
//         );
// }

// export default Categories;