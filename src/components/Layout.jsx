import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts, toggleLoading } from "../services/cartRedux";

const Layout = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const getProudct = async () => {
			dispatch(toggleLoading(true));
			const res = await axios.get("https://fakestoreapi.com/products");
			dispatch(setProducts(res.data));
			dispatch(toggleLoading(false));
		};
		getProudct();
	}, []);
	return (
		<div>
			<Header />
			<div className="body  w-[80%] m-auto">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
