import { CgClose } from "react-icons/cg";
import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
	const [menu, setMenu] = useState(false);
	return (
		<div className="bg-blue-800 relative  text-white flex z-40 items-center px-5 h-12">
			<div className="flex w-full  z-50 justify-between items-center">
				<div className="text-xl ">Logo</div>
				<button
					onClick={() => setMenu(!menu)}
					className="flex z-50 text-2xl items-center"
				>
					{menu ? (
						<CgClose className="transition-all duration-500" />
					) : (
						<LuMenu className="transition-all duration-500" />
					)}
				</button>
			</div>
			<div
				// onClick={() => setMenu(true)}
				className={`content absolute  flex transition-all justify-center h-96  pt-10 duration-500 right-0  -z-10 ${
					menu ? "top-12" : "-top-96"
				} bg-blue-700 left-0`}
			>
				<ul className="flex -z-0 flex-col gap-7 text-3xl">
					<li>
						<a href="">Home</a>
					</li>
					<li>
						<a href="">About</a>
					</li>
					<li>
						<a href="">Contact</a>
					</li>
					<li>
						<a href="">Login</a>
					</li>
					<li>
						<a href="">Register</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
