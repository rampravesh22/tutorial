import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
	const [open, setOpen] = useState(false);
	return (
		<header className="bg-slate-800 flex justify-between items-center flex-col md:flex-row text-white md:justify-between md:px-10">
			<NavLink to={"/"} className="py-4 text-3xl font-bold">
				<span className="origin-center inline-block animate-bounce p-0">
					*
				</span>
				<span className="text-pink-600">Jumbo</span>Notes
			</NavLink>
			<div
				className="md:hidden space-y-2 absolute top-4 right-5 cursor-pointer hover:opacity-90 group"
				onClick={() => setOpen(!open)}
			>
				<i
					className={`fa-sharp fa-solid fa-${
						open ? "xmark" : "bars"
					} text-2xl`}
				></i>
			</div>
			<div>
				<NavLink
					to={"addNote"}
					className="uppercase border md:block hidden rounded-lg hover:shadow-sm px-3 py-2 transition-all active:bg-white active:text-black hover:shadow-white"
				>
					Add Notes
				</NavLink>
			</div>
			<div
				className={`md:hidden ${
					open ? "block" : "hidden"
				} h-[100px] transition-all mt-16`}
			>
				<NavLink
					to={"addNote"}
					className="uppercase border rounded-lg hover:shadow-sm px-3 py-2 transition-all active:bg-white active:text-black hover:shadow-white"
					onClick={() => {
						setOpen(false);
					}}
				>
					Add Notes
				</NavLink>
			</div>
		</header>
	);
};

export default Nav;
