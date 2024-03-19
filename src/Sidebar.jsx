import React from "react";

const Sidebar = ({ sidebar, setSideBar }) => {
	return (
		<div
			className={`px-2 ${
				sidebar ? "translate-x-0" : "-translate-x-[100%]"
			} flex flex-col gap-4 pt-5 duration-500 transition-all origin-left justify-between pl-5 md:hidden   bg-slate-300 flex-grow w-44`}
		>
			<div className="flex flex-col gap-2 ">
				<div>Home</div>
				<div>Contact</div>
				<div>About</div>
				<div>Login</div>
				<div>Register</div>
				<div>Logout</div>
			</div>
			<div className="mb-4">Profile</div>
		</div>
	);
};

export default Sidebar;
