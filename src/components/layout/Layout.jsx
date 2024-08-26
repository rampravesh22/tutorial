import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div className="h-screen flex justify-center items-center">
			<Outlet />
		</div>
	);
};

export default Layout;
