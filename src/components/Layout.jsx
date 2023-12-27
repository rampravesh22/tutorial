import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
	return (
		<div className="flex flex-col h-screen">
			<Header />

			<div className="flex-grow pt-16 bg-slate-200">
				<Outlet />
			</div>
			<div className="">
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
