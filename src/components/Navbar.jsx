import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
	return (
		<div className="text-white bg-slate-900 flex items-center justify-between px-3 py-3">
			<NavLink to="/" className="logo font-bold text-3xl font-sans">
				Stym
			</NavLink>
			<nav>
				<ul>
					<li className="flex gap-6">
						<NavLink to="/" className="hover:text-slate-400">
							Home
						</NavLink>
						<NavLink to="/about" className="hover:text-slate-400">
							About
						</NavLink>
						<NavLink to="/contact" className="hover:text-slate-400">
							Conatact
						</NavLink>
						<NavLink to="/signup" className="hover:text-slate-400">
							Sign-up
						</NavLink>
						<NavLink to="/login" className="hover:text-slate-400">
							Login
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
