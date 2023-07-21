import React, { useState } from "react";
import SideBar from "./SideBar";

const Nav = () => {
	const [side, setSide] = useState(false);

	return (
		<>
			<header className="h-12 bg-purple-700 flex items-center justify-between px-10 md:border-none border-b-2 border-black">
				<div className="text-white text-2xl">Logo</div>
				<nav className="w-[30%] hidden md:block">
					<ul className="md:justify-between md:flex-row text-white hidden md:flex">
						<li>
							<a href="" className="hover:opacity-75">
								Home
							</a>
						</li>
						<li>
							<a href="" className="hover:opacity-75">
								Contact
							</a>
						</li>
						<li>
							<a href="" className="hover:opacity-75">
								Login
							</a>
						</li>
						<li>
							<a href="" className="hover:opacity-75">
								About
							</a>
						</li>
					</ul>
				</nav>
				<div
					className="md:hidden flex flex-col group cursor-pointer"
					onClick={() => setSide(!side)}
				>
					<span className="w-7 rounded-md h-1 bg-white group-hover:bg-red-400 transition-all"></span>
					<span className="w-7 rounded-md h-1 bg-white my-1  group-hover:bg-red-400 transition-all"></span>
					<span className="w-7 rounded-md h-1 bg-white  group-hover:bg-red-400 transition-all"></span>
				</div>
			</header>
			<SideBar side={side}></SideBar>
		</>
	);
};

export default Nav;
