import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
	const [slideAddNote, setAddSlideNote] = useState(false);
	return (
		<header className="bg-slate-800 flex justify-center items-center text-white md:justify-between md:px-10">
			<NavLink to={"/"} className="py-4 text-3xl font-bold">
				<span className="origin-center inline-block animate-bounce p-0">
					*
				</span>
				<span className="text-pink-600">Jumbo</span>Notes
			</NavLink>
			<div
				class="md:hidden space-y-2 absolute right-2 cursor-pointer hover:opacity-90 group"
				onClick={() => setAddSlideNote(true)}
			>
				<div class="w-8 h-0.5 bg-gray-600 group-hover:bg-gray-500"></div>
				<div class="w-8 h-0.5 bg-gray-600 group-hover:bg-gray-500"></div>
				<div class="w-8 h-0.5 bg-gray-600  group-hover:bg-gray-500"></div>
			</div>
			<div>
				<NavLink
					to={"addNote"}
					className="uppercase border md:block hidden rounded-lg hover:shadow-sm px-3 py-2 transition-all active:bg-white active:text-black hover:shadow-white"
				>
					Add Notes
				</NavLink>
			</div>
		</header>
	);
};

export default Nav;
