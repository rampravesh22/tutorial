import React, { useContext } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";

const Header = () => {
	const { cart } = useContext(CartContext);
	return (
		<nav className="flex justify-around  text-white py-4 bg-zinc-900">
			<div>
				<NavLink
					to={"/"}
					className="font-ubuntu text-lg md:text-3xl transition-all"
				>
					Shoppingly
				</NavLink>
			</div>
			<div>
				<NavLink to="/cart" className=" relative">
					<LuShoppingCart className="md:text-4xl text-xl transition-all" />
					{cart.length > 0 && (
						<span className="bg-red-500 flex justify-center items-center rounded-full size-6  absolute -top-2 -right-4">
							{cart.length}
						</span>
					)}
				</NavLink>
			</div>
		</nav>
	);
};

export default Header;
