import React from "react";
import products from "../products";
import Product from "../components/Product";
const HomeScreen = () => {
	return (
		<>
			<div className="grid md:grid-cols-2  grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-12 mt-6 mb-9 justify-center content-center justify-items-center items-center">
				{products.map((product, index) => (
					<Product product={product} key={index} />
				))}
			</div>
		</>
	);
};

export default HomeScreen;
