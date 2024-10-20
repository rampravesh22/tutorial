import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppFooter from "./AppFooter";
import { useSelector } from "react-redux";

const Layout = () => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	return (
		<>
			<Toaster />
			<div className="h-screen flex flex-col">
				{isAuthenticated && (
					<div>
						<Header />
					</div>
				)}
				<div className="flex-grow">
					<Outlet />
				</div>
				{isAuthenticated && (
					<div>
						<AppFooter />
					</div>
				)}
			</div>
		</>
	);
};

export default Layout;
