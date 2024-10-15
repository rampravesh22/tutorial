import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import AppFooter from "./AppFooter";
import { Toaster } from "react-hot-toast";

const Layout = () => {
	return (
		<>
			<Toaster />
			<div className="h-screen flex flex-col">
				<div>
					<Header />
				</div>
				<div className="flex-grow">
					<Outlet />
				</div>
				<div>
					<AppFooter />
				</div>
			</div>
		</>
	);
};

export default Layout;
