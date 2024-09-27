import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
	const { cart, setCart } = useContext(CartContext);
	return (
		<div>
			<div className="bg-zinc-900 text-2xl py-4 px-10 text-white">
				<Link to="/" className="bg-white text-black px-5 py-1 rounded-md">
					Home
				</Link>
			</div>
			<div className="w-1/2 mx-auto mt-10">
				<div className="grid grid-cols-5 border px-2 py-2 rounded-md bg-zinc-900 text-white">
					<span>Id</span>
					<span>Product</span>
					<span>Price</span>
					<span>Quantity</span>
					<span>Total Price</span>
				</div>
				<div className="grid grid-cols-5 px-2">
					{cart.map((item) => (
						<>
							<div>{item.id}</div>
							<div>{item.name}</div>
							<div>Rs.{item.price}</div>
							<div>{item.quantity}</div>
							<div>Rs.{item.quantity * item.price}</div>
						</>
					))}
				</div>
			</div>
		</div>
	);
};

export default Cart;
