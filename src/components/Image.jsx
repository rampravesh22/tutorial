import React from "react";

const Image = ({ value }) => {
	const img = `https://source.unsplash.com/random/${value}x600/`;
	return (
		<>
			<div className="w-[300px] h-[300px] border p-4 line-clamp-1 bg-gray-400 min-w-[300px]  flex-shrink-0   rounded-lg transition-transform transform hover:scale-110">
				<div className="w-[100%] h-[150px] overflow-hidden">
					<img src={img} alt="" className="object-cover" height={100} />
				</div>
				<p className="mt-6">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
					doloremque id corporis consectetur iste
				</p>
			</div>
		</>
	);
};

export default Image;
