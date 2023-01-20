import React from "react"
import { useEffect } from "react"
import "./style.css"
import { arrayRemove, doc, getDoc, updateDoc } from "firebase/firestore";
import API from "../../components/API";
import { db } from "../../firebaseconfig";
import { useState } from "react";


const Cart = ({ CartItems, addToCart, decreaseQty }) => {
	const totalPrice = CartItems.reduce(
		(price, item) => price + item.qty * item.price, 0)

	const [wishlist, setWishlist] = useState([])
	const [wishlist_item_ids, setWishlist_item_ids] = useState([])



	// const remove_from_wishlist = async (i) => {
	// 	console.log(i)
	// 	setWishlist({
	// 		prods: wishlist.filter(function (wishlist_item) {
	// 			return wishlist_item.id !== i
	// 		})
	// 	});
	// 	const wishlistRef = doc(db, "wishlist", "wishlist");
	// 	await updateDoc(wishlistRef, {
	// 		wishlist_items: arrayRemove(i)
	// 	});
	// }


	useEffect(() => {
		const get_wishlist_data = async () => {
			const wishlistRef = doc(db, "wishlist", "wishlist");
			const docSnap = await getDoc(wishlistRef);
			setWishlist_item_ids(docSnap.data().wishlist_items);
		};
		get_wishlist_data()
	})

	useEffect(() => {
		for (let i = 0; i < wishlist_item_ids.length; i++) {
			let id = wishlist_item_ids[i];
			const response = API.get('/products/' + id).then(response => setWishlist([...wishlist, response.data]));
		}
	}, [wishlist_item_ids])





	// prodcut qty total
	return (
		<>
			<>
				<>WISHLIST</>
				<div className="allwishlistitems">
					{wishlist.map(item =>
						<div>
							{item.title}
							{/* <button onClick={()=>remove_from_wishlist(item.id)}>REMOVE ME</button> */}
						</div>)}
				</div>

			</>
			

			<section className='cart-items'>
				<div className='container d_flex'>
					{/* if hamro cart ma kunai pani item xaina bhane no diplay */}

					<div className='cart-details'>
						{CartItems.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

						{/* yasma hami le cart item lai display garaaxa */}
						{CartItems.map((item) => {
							const productQty = item.price * item.qty

							return (
								<div className='cart-list product d_flex' key={item.id}>
									<div className='img'>
										<img src={item.thumbnail} alt='' />
									</div>
									<div className='cart-details'>
										<h3>{item.title}</h3>

										<h4>
											${item.price}.00 * {item.qty}
											<span>${productQty}.00</span>
										</h4>

									</div>
									<div className='cart-items-function'>
										<div className='removeCart'>
											<button className='removeCart'>
												<i className='fa-solid fa-xmark'></i>
											</button>
										</div>
										{/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
										<div className='cartControl d_flex'>

											<button className='incCart' onClick={() => addToCart(item)}>
												<i className='fa-solid fa-plus'></i>
											</button>

											<button className='desCart' onClick={() => decreaseQty(item)}>
												<i className='fa-solid fa-minus'></i>
											</button>

										</div>
									</div>

									<div className='cart-item-price'></div>
								</div>
							)
						})}
					</div>

					<div className='cart-total product'>
						<h2>Cart Summary</h2>
						<div className=' d_flex'>
							<h4>Total Price :</h4>
							<h3>${totalPrice}.00</h3>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Cart
