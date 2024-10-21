import React from "react";
import { twMerge } from "tailwind-merge";

const Loader = ({ className }) => {
	return (
		<div className="flex justify-center items-center ">
			<div
				className={twMerge(
					"size-12 border-e border-e-black border-2   rounded-full animate-spin",
					className
				)}
			></div>
		</div>
	);
};

export default Loader;
