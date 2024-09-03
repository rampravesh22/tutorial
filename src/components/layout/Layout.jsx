import { Button, Link } from "@nextui-org/react";
import React from "react";
import { Outlet, Link as RLink } from "react-router-dom";

const Layout = () => {
	return (
		<div className="">
			<Outlet />
		</div>
	);
};

export default Layout;
