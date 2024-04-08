import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
const Product = ({ product }) => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const id = setTimeout(() => {
			setLoading(false);
		}, 800);
		return () => {
			clearTimeout(id);
		};
	}, []);
	return (
		<>
			{!loading ? (
				<div className="card w-[90%] md:w-72 transition-all   hover:ring-1 hover:ring-neutral rounded border bg-base-100 shadow-md h-[480px]">
					<Link to={`/product/${product._id}`} className="h-[200px]">
						<figure className="h-[200px]">
							<img src={product.image} alt="Shoes" className="object-cover" />
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

							<Link to={`/product/${product._id}`} className="btn  btn-neutral">
								Buy Now
							</Link>
						</div>
					</div>
				</div>
			) : (
				<>
					{/* skeleton */}
					<div className="w-[90%]  border  flex flex-col shadow  md:w-72 h-[480px]">
						{/* image body */}
						<div className="skeleton transition-all rounded-none h-[200px] "></div>
						{/* text body */}
						<div className="h-[280px]  gap-2 flex flex-col p-8 pb-6 ">
							{/* title */}
							<h2 className="skeleton rounded-none h-[140px]"></h2>
							{/* description */}
							<div className="h-6 skeleton "></div>
							{/* rating and reviews */}
							<div className="flex h-8  gap-2 ">
								<div className="w-24 skeleton"></div>
								<div className="w-20 skeleton"></div>
							</div>
							{/* price */}
							<div className="h-8  skeleton w-20"></div>
							{/* buy now button */}
							<div className="btn skeleton self-start  w-24"></div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Product;
