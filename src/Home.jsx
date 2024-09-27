import React, { useContext, useEffect, useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CartContext } from "./context/CartContext";
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
	const { cart, setCart, totalCart, setTotalCart } = useContext(CartContext);
	const totalCarts = () => {
		let sum = 0;
		for (let i = 0; i < cart.length; i++) {
			sum += cart[i].quantity;
		}
		setTotalCart(sum);
	};

	useEffect(() => {
		const sum = cart.reduce((acc, item) => acc + item.quantity, 0);
		setTotalCart(sum);
	}, [cart, totalCart]);

	const addToCart = (product) => {
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
		totalCarts();
	};

	return (
		<div>
			<div className="flex justify-between text-white items-center py-4  bg-zinc-900 px-20 mb-20 text-2xl">
				<h2>Products</h2>
				<Link to="/cart" className="relative">
					<LuShoppingCart className="text-5xl text-white" />
					{cart.length ? (
						<motion.span
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ duration: 0.2, type: "spring" }}
							className="bg-red-500 -top-2 -right-4 absolute rounded-full text-sm text-white  size-7 flex justify-center items-center"
						>
							{totalCart}
						</motion.span>
					) : null}
				</Link>
			</div>
			<div>
				<div className="grid grid-cols-3  w-[60%]  justify-items-center items-center mx-auto gap-6">
					{products.map((product, index) => {
						return (
							<div
								key={index}
								className="size-40 flex-col justify-between border-2 flex p-3 border-black"
							>
								<div>{product.name}</div>
								<button
									onClick={() => addToCart(product)}
									className="bg-blue-500 px-6 py-2  text-white rounded-md"
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
