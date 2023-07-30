import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<div className="flex justify-between">
				<div>Logo</div>
				<ul>
					<li className="flex gap-4 items-start">
						<NavLink
							to="home"
							className="bg-rose-600 px-5 rounded-md text-white my-2 py-2"
						>
							Home
						</NavLink>

						<NavLink
							to="contact"
							className="bg-rose-600 px-5 rounded-md text-white my-2 py-2"
						>
							Cotact
						</NavLink>

						<NavLink
							to="about"
							className="bg-rose-600 px-5 rounded-md text-white my-2 py-2"
						>
							About
						</NavLink>

						<NavLink className="bg-rose-600 px-5 rounded-md text-white my-2 py-2">
							Login
						</NavLink>
					</li>
				</ul>
			</div>
			<Outlet />
		</>
	);
};

export default Layout;
