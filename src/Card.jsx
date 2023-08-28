import React from "react";
const Card = ({ title, description, type }) => {
	return (
		<div className="animate-zoomin w-[300px] hover:scale-[1.2] text-white rounded-md bg-sky-700 transition-all hover:z-20 cursor-pointer group relative overflow-hidden h-[250px] shadow-lg border-2 p-3">
			<h1 className="text-4xl font-bold">{title}</h1>
			<hr />
			<p>{description}</p>
			<div className="bg-black rounded-md group-hover:bottom-[4%] group-hover:scale-100 py-2 transition-all inline absolute text-white text-4xl px-5 scale-0 bottom-[-100%]">
				{type}
			</div>
		</div>
	);
};

export default Card;
