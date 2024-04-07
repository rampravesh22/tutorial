import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
const Product = ({ product }) => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const id = setTimeout(() => {
			setLoading(false);
		}, 500);
		return () => {
			clearTimeout(id);
		};
	}, []);
	return (
		<>
			{!loading ? (
				<div className="card w-[90%] md:w-72 transition-all hover:ring-1 hover:ring-neutral rounded border bg-base-100 shadow-xl min-h-[450px]">
					<Link to={`/product/${product._id}`}>
						<figure>
							<img src={product.image} alt="Shoes" />
						</figure>
					</Link>
					<div className="card-body">
						<Link className="hover:underline" to={`/product/${product._id}`}>
							<h2 className="card-title">{product.name}</h2>
						</Link>
						<p className="truncate">{product.description}</p>
						<div className="card-actions justify-start items-start flex-col">
							<div>
								<Rating
									value={product.rating}
									text={`${product.numReviews} reviews`}
								/>
							</div>
							<p className="font-bold">₹{product.price}</p>

							<button className="btn btn-neutral">Buy Now</button>
						</div>
					</div>
				</div>
			) : (
				<div className="w-[90%] skeleton rounded border flex flex-col gap-3 md:w-72 h-[450px]"></div>
			)}
		</>
	);
};

export default Product;
