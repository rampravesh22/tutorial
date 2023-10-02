import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../services/cartRedux";
const ProductCard = ({ product }) => {
	const dispatch = useDispatch();
	const handleAddToCart = (id) => {
		dispatch(addToCart(id));
	};
	return (
		<div className=" h-[340px] shadow-xl w-[260px] rounded-md p-3 hover:shadow-green-500 transition-all duration-300 hover:shadow-sm">
			<div className=" flex justify-center m-auto h-[220px] ">
				<img src={product.image} alt="" className="w-full object-cover" />
			</div>
			<span>{product.category}</span>
			<span className="flex items-center text-sm">
				<AiFillStar className="text-amber-400" />
				<p>{product.rating.rate}</p>({product.rating.count})
			</span>
			<button
				type="button"
				onClick={() => handleAddToCart(product.id)}
				className="bg-gray-800 mt-2 text-white px-5 py-2 rounded-md self-stretch w-full"
			>
				Add to cart
			</button>
		</div>
	);
};

export default ProductCard;
// category
// :
// "jewelery"
// description
// :
// "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel"
// id
// :
// 8
// image
// :
// "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
// price
// :
// 10.99
// rating
// :
// {rate: 1.9, count: 100}
// title
// :
// "Pierced Owl Rose Gold Plated Stainless St
