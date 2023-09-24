import React from "react";
import { useGlobalContext } from "../context/contextapi";
import Product from "./Product";

const Products = () => {
	const { products } = useGlobalContext();

	return (
		<div className="product-wrapper w-[80%] m-auto p-10  flex flex-wrap gap-10 justify-center mt-4">
			{products.map((product) => (
				<Product key={product.id} product={product} />
			))}
		</div>
	);
};

export default Products;
