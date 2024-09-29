import React from "react";

const Card = ({ product }) => {
	return (
		<div className="hover:shadow-zinc-500 transition-all duration-500 border flex flex-col justify-between w-[90%] md:w-[300px]  p-4 shadow-lg border-zinc-400 rounded-md">
			<div className="flex-grow">
				<div className="w-full overflow-hidden h-[80%] border border-black">
					<img
						src={product.img}
						alt=""
						className="object-cover w-full h-full"
					/>
				</div>
				<div>
					<p className="font-bold ">{product.title}</p>
					<p className="text-xs">{product.author}</p>
					<p>
						Price - <span className="font-medium">{product.price}Rs</span>
					</p>
				</div>
			</div>
			<button className="mt-4 flex justify-center items-center gap-2 hover:bg-zinc-700 bg-zinc-900 text-white px-6 py-1.5 rounded-md">
				Add To Cart
			</button>
		</div>
	);
};

export default Card;
