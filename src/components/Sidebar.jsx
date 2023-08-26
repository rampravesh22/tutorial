import React from "react";

const Sidebar = ({ show, setShow }) => {
	return (
		<div
			className={`bg-emerald-950 text-white sm:hidden flex flex-col items-center justify-between pb-20 origin-left  fixed top-16 w-48 h-[100vh] transition-all duration-300 ${
				show ? "translate-x-[0%]" : "-translate-x-[100%]"
			}`}
		>
			<ul className="flex  flex-col items-center gap-16 mt-10 ">
				<li>
					<a
						href=""
						className="hover:shadow-black hover:shadow px-4 py-1"
					>
						Home
					</a>
				</li>
				<li>
					<a
						href=""
						className="hover:shadow-black hover:shadow px-4 py-1"
					>
						Contact
					</a>
				</li>
				<li>
					<a
						href=""
						className="hover:shadow-black hover:shadow px-4 py-1"
					>
						Register
					</a>
				</li>
				<li>
					<a
						href=""
						className="hover:shadow-black hover:shadow px-4 py-1"
					>
						Login
					</a>
				</li>
			</ul>
			<div>
				<a
					href=""
					className="hover:shadow-black hover:shadow px-4 py-1"
				>
					Logout
				</a>
			</div>
		</div>
	);
};

export default Sidebar;
