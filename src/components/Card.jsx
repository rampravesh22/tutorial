import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { button } from "framer-motion/client";
import { addItemToCart } from "../reducer/cartReducer";

const Card = ({ product }) => {
	const navigate = useNavigate();
	const { cart, dispatch } = useContext(CartContext);

	return (
		<div className="hover:shadow-zinc-500 h-[400px]  transition-all duration-700 border flex flex-col justify-between w-[70%] md:w-[250px]  p-4 shadow-lg border-zinc-400 rounded-md">
			<div className="flex-grow">
				<div className="w-full overflow-hidden h-[200px] border border-black">
					<img
						src={product.img}
						alt=""
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="p-1">
					<p className="font-bold ">{product.title}</p>
					<p className="text-xs">{product.author}</p>
					<p>
						Price - <span className="font-medium">{product.price}Rs</span>
					</p>
				</div>
			</div>
			<div className="">
				{cart.find((item) => item.id == product.id) ? (
					<button
						className="mt-4 flex justify-center w-full items-center gap-2 hover:bg-zinc-700 bg-zinc-900 text-white px-6 py-1.5 rounded-md"
						onClick={() => navigate("/cart")}
					>
						Go to cart
					</button>
				) : (
					<button
						className="mt-4 flex justify-center items-center gap-2 hover:bg-zinc-700 bg-zinc-900 text-white px-6 py-1.5 rounded-md w-full"
						onClick={() => dispatch(addItemToCart(product))}
					>
						Add to cart
					</button>
				)}
			</div>
			{/* {
				<div
					className={`fixed top-0 ${
						product.id === productId
							? "translate-y-[200%]] mt-6"
							: "translate-y-[-100%]"
					} transition-all shadow-md  px-5 py-2  bg-green-500 text-xl  rounded-full will-change-contents translate-x-[-50%] left-[50%]`}
				>
					Item is already Present in the cart
				</div>
			} */}
		</div>
	);
};

export default Card;
