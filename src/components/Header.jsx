import React from "react";

import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div className="wrapper flex justify-between text-white  h-12 items-center md:px-8 bg-blue-600">
			<NavLink className="logo text-xl font-bold" to="/">
				<span className=" font-sans">Olan</span>Shop
			</NavLink>
			<NavLink className="cart text-lg" to="cart">
				Cart
			</NavLink>
		</div>
	);
};

export default Header;
