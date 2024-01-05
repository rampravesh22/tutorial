import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";

const Layout = () => {
	return (
		<div className="h-screen flex flex-col">
			<div className=" text-white">
				<Navbar />
			</div>
			<div className="flex-grow bg-teal-600">
				<Outlet />
			</div>
			<div className="">
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
