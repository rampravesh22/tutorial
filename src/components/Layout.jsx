import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div className="h-screen flex flex-col">
			<div>
				<Header />
			</div>
			<div className="flex-grow ">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
