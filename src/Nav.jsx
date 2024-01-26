import React from "react";

const Nav = () => {
	return (
		<div className="flex justify-between px-8 bg-gray-800 text-white items-center">
			<div className="font-bold text-4xl">
				<span className="">Todo</span>
			</div>
			<nav>
				<ul className="flex items-center py-5 gap-3 uppercase">
					<button className=" px-4 rounded-md py-1">Login</button>
					<button className=" px-4 rounded-md py-1">Register</button>
					<button className="bg-red-500 px-4 rounded-md py-1">
						Logout
					</button>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
