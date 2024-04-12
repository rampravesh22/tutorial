import { BiRupee } from "react-icons/bi";
import { IoMdArrowBack } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import products from "../products";
import Rating from "../components/Rating";
import axios from "axios";

const ProductScreen = () => {
	const { id: productId } = useParams();
	const [loading, setLoading] = useState(true);
	const [product, setProduct] = useState({});

	useEffect(() => {
		const getData = async () => {
			const { data } = await axios.get(`/api/product/${productId}`);
			setProduct(data);
			setTimeout(() => {
				setLoading(false);
			}, 400);
		};
		getData();
	}, []);

	return (
		<>
			{loading ? (
				<div className="h-full mb-20 mt-10 p-10  min-h-[70vh]">
					{/* skeleton loading */}
					<div className="flex md:gap-4  flex-col gap-y-10  md:justify-center w-full items-center md:items-start">
						{/* go back button skeleton */}
						<div className="skeleton btn self-start mb-5  btn-sm w-28 transition-all h-10 space-x-0  group"></div>
						<div className="flex gap-3  w-full md:flex-row flex-col">
							{/* image  */}
							{/* imgae container skeleton */}
							<div className="w-full h-[300px] md:w-1/3 skeleton "></div>

							{/* detailes container skeleton */}
							<div className="w-full md:w-1/3">
								{/* title */}
								<h1 className="fonts-bold text-3xl skeleton md:h-[65px]"></h1>
								<div className="divider"></div>
								{/* rating and reviews skeleton */}
								<div className="flex gap-5 ">
									<div className="md:w-20 h-6 skeleton"></div>
									<div className="md:w-16 h-6 skeleton"></div>
								</div>
								<div className="divider"></div>
								{/* price skeleton */}
								<div className="flex items-center gap-7">
									<span className="h-6 w-10 skeleton"> </span>
									<span className="h-6 w-16 skeleton"> </span>
								</div>
								<div className="divider"></div>
								{/*skeleton description */}
								<div className="flex flex-col gap-3">
									<div className="font-bold skeleton h-6 w-24"></div>
									<div className="font-bold skeleton h-[90px] w-full "></div>
								</div>
							</div>
							{/*  cart container skeleton */}
							<div className="w-full  md:w-64 h-56 rounded border border-gray-300 p-3">
								<div className="flex justify-between">
									<span className="font-bold skeleton h-6 w-12"> </span>
									<span className="flex items-center skeleton h-6 w-12"></span>
								</div>
								<div className="divider"></div>
								<div className="flex justify-between">
									<span className="font-bold h-6 skeleton w-12"></span>
									<span className="h-6 skeleton w-12"> </span>
								</div>
								<div className="divider"></div>
								<button
									type="button"
									className="btn w-28 h-12 skeleton"
								></button>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="h-full mb-20  mt-10 p-10  min-h-[70vh]">
					<div className="flex md:gap-4 flex-col  gap-y-10  md:justify-center w-full items-center md:items-start">
						<Link
							to="/"
							className="btn self-start mb-5 transition-all btn-neutral btn-sm h-10 space-x-0 group"
						>
							<IoMdArrowBack className="group-hover:right-1  bg-white rounded-full text-black  text-lg relative transition-all" />
							Go Back
						</Link>
						<div className="flex w-full gap-3 md:flex-row flex-col  ">
							{/* image container */}
							<div className="w-full flex  md:w-1/3 bg-red-300 h-[300px]">
								<img
									src={product.image}
									alt={product.name}
									className="border-[1px] border-gray-300 w-full object-cover shadow "
								/>
							</div>
							{/* description contaienr */}
							<div className="w-full md:w-1/3">
								{/* title */}
								<h1 className="font-bold text-3xl ">{product.name}</h1>
								<div className="divider"></div>
								{/* rating and reviews */}
								<Rating
									value={product.rating}
									text={` ${product.numReviews} reviews`}
								/>
								<div className="divider"></div>
								{/* price */}
								<div className="flex items-center">
									<span className="font-bold">Price </span>
									<span className="ml-5 flex items-center">
										<BiRupee className="text-xl" />
										{product.price}
									</span>
								</div>
								<div className="divider"></div>
								{/* description */}
								<div>
									<h1 className="font-bold">Description</h1>
									<p>{product.description}</p>
								</div>
							</div>
							{/* cart container */}
							<div className="w-full md:w-64 h-56 rounded border-neutral border p-3">
								<div className="flex justify-between">
									<span className="font-bold">Price </span>
									<span className="flex items-center">
										<BiRupee />
										{product.price}
									</span>
								</div>
								<div className="divider"></div>
								<div className="flex justify-between">
									<span className="font-bold">Status</span>
									<span>
										{product.countInStock > 0 ? "In Stack" : "Out of Stock"}
									</span>
								</div>
								<div className="divider"></div>
								<button
									type="button"
									className={`${
										product.countInStock > 0 ? "btn-neutral" : "btn-disabled"
									} btn`}
								>
									Add To Cart
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ProductScreen;
