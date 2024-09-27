import React, { useEffect, useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const products = [
	{ id: 1, name: "Laptop", price: 1000 },
	{ id: 2, name: "Smartphone", price: 600 },
	{ id: 3, name: "Headphones", price: 150 },
	{ id: 4, name: "Smartwatch", price: 250 },
	{ id: 5, name: "Camera", price: 800 },
	{ id: 6, name: "Gaming Console", price: 500 },
	{ id: 7, name: "Bluetooth Speaker", price: 100 },
	{ id: 8, name: "Tablet", price: 400 },
	{ id: 9, name: "Monitor", price: 300 },
	{ id: 10, name: "Keyboard", price: 80 },
];
const Home = () => {
	const [cart, setCart] = useState([]);
	const totalCarts = () => {
		let sum = 0;
		for (let i = 0; i < cart.length; i++) {
			sum += cart[i].quantity;
		}
		return sum;
	};

	const addToCart = (product) => {
		totalCarts();
		const existingProduct = cart.find((item) => product.id === item.id);
		if (existingProduct) {
			setCart((preState) => {
				return preState.map((item) =>
					item.id === product.id
						? { ...existingProduct, quantity: existingProduct.quantity + 1 }
						: item
				);
			});
		} else {
			setCart((preState) => [...preState, { ...product, quantity: 1 }]);
		}
	};

	console.table(cart);
	return (
		<div>
			<div className="flex justify-between mt-5 px-20 py-2 text-2xl">
				<h2>Products</h2>
				<Link to="/cart" className="relative">
					<LuShoppingCart className="text-5xl" />
					{cart.length ? (
						<motion.span
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ duration: 0.2, type: "spring" }}
							className="bg-red-500 -top-4 -right-4 absolute rounded-full text-sm text-white  size-7 flex justify-center items-center"
						>
							{totalCarts()}
						</motion.span>
					) : null}
				</Link>
			</div>
			<div>
				<div className="grid grid-cols-3 justify-center w-[60%]  justify-items-center content-center items-center mx-auto gap-6">
					{products.map((product, index) => {
						return (
							<div
								key={index}
								className="size-40 border-2 flex items-end p-3 border-black"
							>
								<button
									onClick={() => addToCart(product)}
									className="bg-blue-500 px-6 py-2 text-white rounded-md"
								>
									Add to cart
								</button>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Home;
