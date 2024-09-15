import React from "react";
import { twMerge } from "tailwind-merge";
const Loader = ({ className }) => {
	return (
		<div
			className={twMerge(
				"size-10 border-2 border-e-black rounded-full  animate-spin",
				className
			)}
		></div>
	);
};

export default Loader;
