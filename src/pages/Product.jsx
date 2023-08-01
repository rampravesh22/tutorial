import React from "react";
import Products from "./Products";
import { Outlet, useParams } from "react-router-dom";

const Product = () => {
	const { category } = useParams();
	console.log(category);
	return (
		<div className="">
			<h1>{category}</h1>
		</div>
	);
};

export default Product;
