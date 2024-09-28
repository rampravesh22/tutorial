import React, { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import { LuPlus, LuMinus } from "react-icons/lu";

const Cart = () => {
	const { cart, setCart } = useContext(CartContext);
	const [product, setProduct] = useState("");
	const [modal, setModal] = useState(false);
	const increaseQunatity = (id) => {
		setCart((prevState) =>
			prevState.map((item) => {
				return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
			})
		);
	};

	const decreaseQunatity = (id) => {
		const product = cart.find((item) => item.id == id);
		console.log(product);

		if (product.quantity <= 1) {
			setModal(true);
			setProduct(product);
		}
		setCart((prevState) =>
			prevState.map((item) => {
				if (item.quantity > 0) {
					return item.id === id
						? { ...item, quantity: item.quantity - 1 }
						: item;
				} else {
					return;
				}
			})
		);
	};

	return (
		<div>
			<div className="bg-zinc-900 text-2xl py-4 px-10 text-white">
				<Link to="/" className="bg-white text-black px-5 py-1 rounded-md">
					Home
				</Link>
			</div>

			{modal && (
				<div className="bg-[rgba(0,0,0,0.5)] flex justify-center items-center fixed inset-0 top-16">
					<div className="bg-white w-[500px] rounded-lg  p-5 h-[150px] flex flex-col justify-between">
						<div className="text-center mt-2 ">
							Are you sure, you want to remove{" "}
							<span className="border px-2 py-1 bg-green-600 text-white rounded-full">
								{product.name}
							</span>{" "}
							from cart?
						</div>
						<div className="self-end flex gap-2">
							<button className="bg-zinc-900 text-white py-1 rounded-md px-6">
								Yes
							</button>
							<button
								onClick={() => setModal(false)}
								className="bg-zinc-200 text-black py-1 rounded-md px-6"
							>
								No
							</button>
						</div>
					</div>
				</div>
			)}

			<div className="w-[90%] mx-auto mt-10 ">
				<div className="grid grid-cols-7 gap-5 border px-2 py-2 rounded-md bg-zinc-900 text-white">
					<span>Id</span>
					<span className="col-span-2">Product</span>
					<span>Price</span>
					<span>Quantity</span>
					<span>Total Price</span>
					<span>Manage</span>
				</div>
				<div className="px-2">
					{cart.map((item, index) => (
						<div key={index} className="grid grid-cols-7 gap-5 ">
							<div>{item.id}</div>
							<div className="col-span-2">{item.name}</div>
							<div>Rs.{item.price}</div>
							<div>{item.quantity}</div>
							<div>Rs.{item.quantity * item.price}</div>
							<div className="flex gap-4 items-center">
								<button
									onClick={() => decreaseQunatity(item.id)}
									className="border flex items-center justify-center bg-gray-300  w-8 rounded-md h-5 active:right-1"
								>
									<LuMinus />
								</button>
								<button
									onClick={() => increaseQunatity(item.id)}
									className="border flex items-center justify-center bg-gray-300  w-8 rounded-md h-5 active:right-1"
								>
									<LuPlus />
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Cart;
