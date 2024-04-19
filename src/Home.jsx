import React from "react";

const Home = () => {
	const numbers = Array(200).fill(1);
	return (
		<div className="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-4  gap-2 p-5">
			{numbers.map((val, index) => {
				return (
					<div
						key={index}
						className="overflow-hidden p-5  h-44 border border-gray-800  rounded bg-gray-300"
					>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
						eum laudantium est itaque sunt expedita distinctio atque cumque
						vitae eveniet.
					</div>
				);
			})}
		</div>
	);
};

export default Home;
