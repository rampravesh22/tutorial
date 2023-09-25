import React, { useState } from "react";
import { useGlobalContext } from "../context/contextapi";

const Product = ({ product }) => {
	const { setCart, products } = useGlobalContext();

	const handleAddToCart = () => {
		const cartCount = localStorage.getItem("cart");
		const count = parseInt(cartCount) + 1;
		setCart(count);
		localStorage.setItem("cart", count);
	};

	return (
		<div className="product-wrapper  flex flex-col border-red-600 h-[400px] overflow-hidden p-4 w-[300px] shadow shadow-black rounded-md ">
			<div className="flex-grow">
				<div className="thumbnai-wrapper relative rounded-lg h-[150px] group overflow-hidden">
					<img
						src={product.thumbnail}
						alt=""
						className="w-full h-[200px] object-cover rounded-lg group-hover:scale-125 transition-all"
					/>
					<div className="discount absolute  text-xs left-2 top-2 shadow-md">
						<p className="bg-green-600 text-white rounded-md px-3 py-1">
							{product.discountPercentage.toFixed(0)} % OFF
						</p>
					</div>
				</div>
				<div className="mt-2 font-bold">
					<h3>{product.title}</h3>
				</div>
				<div className="description">
					<p className="line-clamp-3">{product.description}...</p>
				</div>
				<div className="price font-bold">
					<p>
						₹{product.price}{" "}
						<sub className="line-through text-xs opacity-70">
							₹
							{product.price -
								(
									(product.price * product.discountPercentage) /
									100
								).toFixed(0)}
						</sub>
					</p>
				</div>
			</div>
			<div className="add-to-cart">
				<button
					type="button"
					onClick={handleAddToCart}
					className="bg-black w-full text-white py-3 text-xl rounded-md"
				>
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default Product;
