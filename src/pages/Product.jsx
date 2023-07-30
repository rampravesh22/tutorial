import React from "react";
import Products from "./Products";
import { Outlet, useParams } from "react-router-dom";

const Product = () => {
	const { category } = useParams();
	console.log(category);
	return (
		<div className="w-full">
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id aut a
				similique laborum fugit molestiae explicabo, nam deleniti sequi
				doloremque totam distinctio repellendus expedita cupiditate ipsum in
				accusamus odio eveniet.
			</p>
			<h1>{category}</h1>
		</div>
	);
};

export default Product;
