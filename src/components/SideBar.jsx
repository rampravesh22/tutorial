import React from "react";

const SideBar = ({ side }) => {
	return (
		<div>
			<div
				className={`bg-purple-700 w-1/3 h-[400px] top-0 flex flex-col transition-all justify-between md:hidden translate-x-${
					side ? "[100%]" : "[-100%]"
				}`}
			>
				<ul className="h-[60%]  flex flex-col justify-between pt-3 pl-9 text-white ">
					<li>
						<a href="" className="hover:text-purple-300 transition-all">
							Home
						</a>
					</li>
					<li>
						<a href="" className="hover:text-purple-300 transition-all">
							Contact
						</a>
					</li>
					<li>
						<a href="" className="hover:text-purple-300 transition-all">
							Login
						</a>
					</li>
					<li>
						<a href="" className="hover:text-purple-300 transition-all">
							About
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SideBar;
