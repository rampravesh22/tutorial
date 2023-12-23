import { BsCartDash } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import React from "react";
import { myLogo } from "../assets";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header className="fixed shadow-md w-full h-16 ">
			{/* desktop */}
			<div className="h-full flex items-center justify-between">
				<Link to="/">
					<div className="h-full flex items-center text-3xl">
						<img src={myLogo} alt="" className="w-16 h-full " />
						<span>
							E-<span className="text-orange-700">budy</span>
						</span>
					</div>
				</Link>
				<div className=" flex gap-4 md:gap-7 pr-3">
					<nav className="flex gap-4 md:gap-6 text-base md:text-lg">
						<NavLink to="/">Home</NavLink>
						<NavLink to="/menu">Menu</NavLink>
						<NavLink to="/about">About</NavLink>
						<NavLink to="/contact">Contact</NavLink>
					</nav>
					<div>
						<AiOutlineUser className="text-2xl" />
					</div>
					<div>
						<BsCartDash className="text-2xl" />
					</div>
				</div>
			</div>

			{/* mobile */}
		</header>
	);
};

export default Header;
