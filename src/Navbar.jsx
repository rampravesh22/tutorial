import { CgClose } from "react-icons/cg";
import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
	const [menu, setMenu] = useState(false);
	return (
		<div className="bg-blue-800 relative  text-white flex z-20 items-center px-5 h-12">
			<div className="flex w-full justify-between items-center">
				<div className="text-xl z-30">Logo</div>
				<button
					onClick={() => setMenu(!menu)}
					className="flex z-30 text-2xl items-center"
				>
					{menu ? <CgClose className="" /> : <LuMenu />}
				</button>
			</div>
			<div
				onClick={() => setMenu(false)}
				className={`absolute z-10 top-12 flex transition-all justify-center h-96  pt-10 duration-500 right-0 w-full ${
					menu ? "top-12" : "-top-96"
				} bg-blue-800 left-0`}
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
