import { CgProfile } from "react-icons/cg";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const [profileMenu, setProfileMenu] = useState(false);
	return (
		<div className="flex bg-gray-800 h-12 items-center justify-between px-5">
			<div className="flex items-center gap-3">
				<div className="text-2xl">Voting Sytem</div>
				<nav>
					<ul className="flex items-center gap-3 mr-4">
						<li>
							<NavLink>Home</NavLink>
						</li>
						<li>
							<NavLink>About</NavLink>
						</li>
						<li>
							<NavLink>Contact</NavLink>
						</li>
					</ul>
				</nav>
			</div>

			<div className="flex relative">
				<div>
					<CgProfile className="text-3xl" />
				</div>
				<div className="absolute bg-white text-black w-20 -bottom-28">
					<ul>
						<li>Profile</li>
						<li>Signup</li>
						<li>Sign in</li>
						<li>Logout</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
