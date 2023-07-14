import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Header = () => {
	const [open, setOpen] = useState(false);
	const handleToggle = () => {
		setOpen(!open);
	};
	return (
		<header className="bg-slate-800 md:py-2 md:px-10 py-2 flex-col md:flex-row items-center px-5 justify-between text-white relative flex md:justify-between md:items-center">
			<div className="text-2xl text-center">Logo</div>
			<nav className="hidden md:block">
				<ul className="flex md:justify-between space-x-12 ">
					<li className="hover:text-red-400 cursor-pointer transition-all ">
						Home
					</li>
					<li className="hover:text-red-400 cursor-pointer transition-all ">
						Contact
					</li>
					<li className="hover:text-red-400 cursor-pointer transition-all ">
						Services
					</li>
					<li className="hover:text-red-400 cursor-pointer transition-all ">
						Login
					</li>
				</ul>
			</nav>
			<div className="md:hidden absolute right-5">
				<FontAwesomeIcon
					icon={open ? faXmark : faBars}
					className="text-xl cursor-pointer transition-all duration-300"
					onClick={() => {
						setOpen(!open);
					}}
				/>
			</div>
			<nav className={`md:hidden ${!open ? "hidden" : "block"} mt-6 pb-4`}>
				<ul className="flex flex-col items-center space-y-7">
					<li className="hover:text-red-400 cursor-pointer transition-all ">
						Home
					</li>
					<li className="hover:text-red-400 cursor-pointer transition-all ">
						Contact
					</li>
					<li className="hover:text-red-400 cursor-pointer transition-all ">
						Services
					</li>
					<li className="hover:text-red-400 cursor-pointer transition-all ">
						Login
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
