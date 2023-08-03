import React, { useContext } from "react";
import { Outlet, useParams } from "react-router-dom";
import { GlobalContext } from "../context/AppContext";
import ProductItem from "../components/ProductItem";

const Product = () => {
	const { category } = useParams();
	const { products } = useContext(GlobalContext);

	return (
		<div className="flex md:flex-row flex-col content-center gap-3 flex-wrap justify-center md:my-0 my-10">
			{products.map((product) => {
				return <ProductItem product={product} key={product.id} />;
			})}
		</div>
	);
};

export default Product;
