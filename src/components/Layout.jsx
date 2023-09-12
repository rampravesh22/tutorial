import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";
const Layout = () => {
	return (
		<div className="layout flex flex-col h-screen">
			<Navbar />
			<div className="flex-grow">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
