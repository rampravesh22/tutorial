import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useGlobalContext } from "../context/contextapi";
const Header = () => {
	const { cart } = useGlobalContext();
	return (
		<div className="bg-blue-950 px-5  h-16 text-white flex justify-between items-center">
			<a href="" className="font-bold text-2xl ">
				Products
			</a>
			<div className="cart flex relative">
				<AiOutlineShoppingCart className="text-3xl mr-2" /> Cart
				{cart ? (
					<span className="absolute bg-pink-700 rounded-full flex justify-center items-center w-6 h-6 p-1 text-xs -top-2 -left-2">
						{cart}
					</span>
				) : null}
			</div>
		</div>
	);
};
export default Header;
