import React from "react";
import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
	return (
		<div className="flex h-screen flex-col">
			<div className="m-10">
				<NavBar />
			</div>
			<div className="flex-grow">
				<Outlet />
			</div>
			<div className="">
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
