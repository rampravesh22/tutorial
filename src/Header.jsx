import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header className="bg-purple-700 py-3 px-40 flex justify-between">
			<div className="logo text-white text-2xl tracking-wider">
				<NavLink to={"/"}>
					<span className="text-red-600">S</span>hop
					<span className="text-red-600">S</span>hare
				</NavLink>
			</div>
			<nav>
				<ul className="flex w-[30rem] justify-between items-center text-lg ">
					<li>
						<NavLink
							to={"/"}
							className=" text-white px-3 py-1 hover:text-[#202020] transition-all rounded-sm hover:bg-sky-600 "
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/contact"}
							className="text-white px-3 py-1 hover:text-[#202020] transition-all rounded-sm hover:bg-sky-600 "
						>
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/about"}
							className="text-white px-3 py-1 hover:text-[#202020] transition-all rounded-sm hover:bg-sky-600 "
						>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/login"}
							className="text-white px-3 py-1 hover:text-[#202020] transition-all rounded-sm hover:bg-sky-600 "
						>
							Login
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
