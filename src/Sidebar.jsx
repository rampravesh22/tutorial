import React, { useState } from "react";
import { BsHammer } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="h-screen flex">
			{/* Sidebar */}
			<div
				className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-all ease-in-out duration-500 transform ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				} w-64`}
			>
				<div className="flex justify-between p-4">
					<h1 className="text-2xl font-bold">Menu</h1>
					<button
						onClick={toggleSidebar}
						className="text-xl focus:outline-none"
					>
						&times;
					</button>
				</div>
				<ul className="p-4 space-y-4">
					<li>
						<a href="#" className="block p-2 hover:bg-gray-700 rounded">
							Home
						</a>
					</li>
					<li>
						<a href="#" className="block p-2 hover:bg-gray-700 rounded">
							About
						</a>
					</li>
					<li>
						<a href="#" className="block p-2 hover:bg-gray-700 rounded">
							Services
						</a>
					</li>
					<li>
						<a href="#" className="block p-2 hover:bg-gray-700 rounded">
							Contact
						</a>
					</li>
				</ul>
			</div>

			{/* Main Content */}
			<div className="flex-1 bg-gray-100">
				<header className="bg-white p-4 shadow-md">
					<button
						onClick={toggleSidebar}
						className="px-4 py-2 bg-blue-600 text-white rounded-lg"
					>
						<GiHamburgerMenu />
					</button>
				</header>
				<div className="p-6">
					<h2 className="text-3xl font-semibold">Main Content</h2>
					<p className="mt-4">
						This is the main content area. You can toggle the sidebar to show or
						hide.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
