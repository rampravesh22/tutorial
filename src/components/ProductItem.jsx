import React from "react";
import APIurl from "../context/api";

const ProductItem = ({ product }) => {
	return (
		<div className="md:w-56  md:h-80 shadow-md p-2 border-2 flex flex-col w-[70%] h-[30rem]">
			<div className="h-1/2 bg-red-600">
				<img
					src={`${APIurl}${product.product_image}`}
					alt={product.description}
					className="object-cover w-full h-full"
				/>
			</div>
			<div className="">
				<h1>{product.title}</h1>
				<span className="font-bold">{product.price}.00 Rs.</span>
			</div>
			<p>{product.description}</p>
		</div>
	);
};

export default ProductItem;
