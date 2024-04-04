import React from "react";
import products from "../products";
import Product from "../components/Product";
const HomeScreen = () => {
	return (
		<>
			<div className="grid md:grid-cols-2 gap-y-9 md:gap-8 lg:gap-8 grid-cols-1 lg:grid-cols-3   mt-6 mb-9 justify-center content-center justify-items-center items-center">
				{products.map((product, index) => (
					<Product product={product} key={product._id} />
				))}
			</div>
		</>
	);
};

export default HomeScreen;
