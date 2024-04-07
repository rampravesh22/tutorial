import { IoMdArrowBack } from "react-icons/io";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import products from "../products";
import Rating from "../components/Rating";

const ProductScreen = () => {
	const { id: productId } = useParams();
	const product = products.find((product) => product._id === productId);
	console.log(product);
	return (
		<div className="h-full bg-red-400 ">
			<Link to="/" className="btn  btn-neutral btn-sm ml-2 space-x-0  group">
				<IoMdArrowBack className="group-hover:right-1 relative transition-all" />
				Go Back
			</Link>
			<div></div>
		</div>
	);
};

export default ProductScreen;
