import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { CiSquareRemove } from "react-icons/ci";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";
import {
	decrementCartItem,
	incrementCartItem,
	removeFromCart,
} from "../reducer/cartReducer.js";
import { AnimatePresence } from "framer-motion";

const Cart = () => {
	const { cart, dispatch } = useContext(CartContext);
	return (
		<div className="m-10">
			<div className="grid gap-2 font-bold grid-cols-[3fr_1fr_1fr_1fr_1fr_1fr] border-b-2 mb-4 border-black">
				<div>Product</div>
				<div>Price</div>
				<div>Quantity</div>
				<div>Total Price </div>
				<div>Manage</div>
				<div>Remove</div>
			</div>
			<div className="flex flex-col gap-6">
				{cart.map((product, index) => {
					return (
						<motion.div
							key={index}
							exit={{ scale: 1, origin: "top" }}
							transition={{ duration: 1000 }}
							className="grid transition-all grid-cols-[3fr_1fr_1fr_1fr_1fr_1fr] "
						>
							<div className="flex gap-4">
								<img src={product.img} alt="" className="size-8" />
								<p>{product.title}</p>
							</div>
							<div>Rs. {product.price}</div>
							<div>{product.quantity}</div>
							<div>Rs. {product.price * product.quantity}</div>
							<div className=" gap-4 flex">
								<button
									onClick={() => dispatch(decrementCartItem(product.id))}
									className="text-lg bg-zinc-300  transition-all  rounded-md px-2 py-0"
								>
									<AiOutlineMinus />
								</button>
								<button
									onClick={() => dispatch(incrementCartItem(product.id))}
									className="text-lg bg-zinc-300  px-2 py-0 rounded-md"
								>
									<AiOutlinePlus />
								</button>
							</div>
							<button
								className="bg-red-500 hover:bg-red-600 transition-all text-white flex text-sm rounded-full gap-2  justify-center items-center"
								onClick={() => dispatch(removeFromCart(product.id))}
							>
								Remove{<CiSquareRemove />}
							</button>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

export default Cart;
