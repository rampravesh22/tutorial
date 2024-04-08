import { BiRupee } from "react-icons/bi";
import { IoMdArrowBack } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import products from "../products";
import Rating from "../components/Rating";

const ProductScreen = () => {
	const { id: productId } = useParams();
	const [loading, setLoading] = useState(true);
	const product = products.find((product) => product._id === productId);
	useEffect(() => {
		const getData = () => {
			setTimeout(() => {
				setLoading(false);
			}, 1500);
		};
		getData();
	});
	return (
		<>
			{loading ? (
				<div className="h-full mb-20 mt-10 p-10">
					{/* skeleton loading */}
					<div className="flex md:gap-4 flex-col gap-y-10  md:justify-center w-full items-center md:items-start">
						{/* go back button */}
						<div className="skeleton btn self-start mb-5  btn-sm w-28 transition-all h-10 space-x-0  group"></div>
						<div className="flex gap-3 md:flex-row flex-col">
							{/* image  */}
							{/* imgae containe */}
							<div className="w-full md:w-1/3 skeleton h-[300px]"></div>

							{/* detailes container */}
							<div className="w-full md:w-1/3">
								{/* title */}
								<h1 className="font-bold text-3xl skeleton md:h-[108px]"></h1>
								<div className="divider"></div>
								{/* rating and reviews */}
								<div className="flex gap-5 ">
									<div className="md:w-20 h-6 skeleton"></div>
									<div className="md:w-16 h-6 skeleton"></div>
								</div>
								<div className="divider"></div>
								{/* price */}
								<div className="flex items-center gap-7">
									<span className="h-6 w-10 skeleton"> </span>
									<span className="h-6 w-16 skeleton"> </span>
								</div>
								<div className="divider"></div>
								<div>
									<h1 className="font-bold skeleton h-6 w-24"></h1>
									{/* <p className="h-[300px] skeleton w-[400px]">
										{product.description}
									</p> */}
								</div>
							</div>
							{/* cart container */}
							<div className="w-full  md:w-64 h-56 rounded border-neutral border p-3">
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
			) : (
				<div className="h-full mb-20 mt-10 p-10">
					<div className="flex md:gap-4 flex-col gap-y-10  md:justify-center w-full items-center md:items-start">
						<Link
							to="/"
							className="btn self-start mb-5 btn-neutral btn-sm  h-10 space-x-0  group"
						>
							<IoMdArrowBack className="group-hover:right-1  bg-white rounded-full text-black  text-lg relative transition-all" />
							Go Back
						</Link>
						<div className="flex gap-3 md:flex-row flex-col">
							<div className="w-full md:w-1/3 shadow border h-[300px]">
								<img
									src={product.image}
									alt=""
									className="object-cover h-[300px]"
								/>
							</div>

							<div className="w-full md:w-1/3">
								<h1 className="font-bold text-3xl">{product.name}</h1>
								<div className="divider"></div>
								<Rating
									value={product.rating}
									text={` ${product.numReviews} reviews`}
								/>
								<div className="divider"></div>
								<div className="flex items-center">
									<span className="font-bold">Price </span>
									<span className="ml-5 flex items-center">
										<BiRupee className="text-xl" />
										{product.price}
									</span>
								</div>
								<div className="divider"></div>
								<div>
									<h1 className="font-bold">Description</h1>
									<p>{product.description}</p>
								</div>
							</div>
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
