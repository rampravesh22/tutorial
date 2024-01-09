import { BsCartDash } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import React, { useState } from "react";
import { myLogo } from "../assets";
import { twMerge } from "tailwind-merge";
import { NavLink, Link, useLocation } from "react-router-dom";

const Header = () => {
	const [showProfileMenu, setProfileMenu] = useState(false);
	const location = useLocation();
	const path = location.pathname;

	const setActive = (pathValue) => {
		return pathValue === path;
	};
	return (
		<header className="shadow-md fixed top-0 bg-white z-50 w-full h-16 ">
			{/* desktop */}
			<div className="h-full flex items-center justify-between">
				<NavLink to="/">
					<div className="h-full flex items-center text-3xl">
						<img src={myLogo} alt="" className="w-16 h-full " />
						<span>
							Shopping-<span className="text-orange-700">budy</span>
						</span>
					</div>
				</NavLink>
				<div className=" flex gap-4 md:gap-7 pr-3 justify-center items-center">
					<nav className="flex gap-4 md:gap-6 text-base md:text-lg items-center">
						<NavLink
							to="/"
							className={twMerge(
								setActive("/" ? "font-bold" : "bg-red-400 ")
							)}
						>
							Home
						</NavLink>
						<NavLink
							to="/menu"
							className={twMerge(setActive("/menu" ? "font-bold" : ""))}
						>
							Menu
						</NavLink>
						<NavLink to="/about">About</NavLink>
						<NavLink to="/contact">Contact</NavLink>
					</nav>
					<div className="relative text-2xl">
						<BsCartDash className="" />
						<div className="absolute bg-red-600 -top-2 -right-4 text-white rounded-full px-1.5 py-1 text-xs">
							10
						</div>
					</div>
					<div
						className=" flex items-center justify-center "
						onClick={() => setProfileMenu(!showProfileMenu)}
					>
						<button className="border-2 text-2xl border-solid border-slate-600 rounded-full cursor-pointer">
							<AiOutlineUser className="" />
						</button>
						{showProfileMenu && (
							<div className="absolute border -bottom-20 gap-2 flex flex-col right-2 shadow drop-shadow-md p-4 bg-white">
								<Link to="/newproduct" className="hover:text-blue-700">
									New Product
								</Link>
								<Link to="/login" className="hover:text-blue-700">
									Login
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* mobile */}
		</header>
	);
};

export default Header;
