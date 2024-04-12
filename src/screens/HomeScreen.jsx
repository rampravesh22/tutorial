import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import axios from "axios";
const HomeScreen = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const res = await axios.get("/api/products/");
				setProducts(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchProduct();
	}, []);

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
