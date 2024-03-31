import React, { useEffect, useState } from "react";

const Product = ({ product }) => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const id = setTimeout(() => {
			setLoading(false);
		}, 2000);
		return () => {
			clearTimeout(id);
		};
	}, []);
	return (
		<>
			{!loading ? (
				<div className="card w-[90%] rounded border md:w-80 bg-base-100 shadow-xl h-[450px]">
					<figure>
						<img src={product.image} alt="Shoes" />
					</figure>
					<div className="card-body">
						<h2 className="card-title">Shoes!</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div className="card-actions justify-end">
							<button className="btn btn-neutral">Buy Now</button>
						</div>
					</div>
				</div>
			) : (
				<div className="skeleton w-[90%] rounded border md:w-80 h-[450px]"></div>
			)}
		</>
	);
};

export default Product;
