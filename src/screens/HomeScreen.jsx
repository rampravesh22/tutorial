import React, { useEffect, useState } from "react";
import products from "../products";
import Product from "../components/Product";
const HomeScreen = () => {
	const [data, setData] = useState();
	return (
		<>
			<div className="grid sm:grid-cols-2 gap-10 md:gap-8  grid-cols-1 md:grid-cols-3 mt-6 mb-9 justify-center content-center  justify-items-center items-center">
				{products.map((product) => (
					<Product product={product} key={product._id} />
				))}
			</div>
		</>
	);
};

export default HomeScreen;
