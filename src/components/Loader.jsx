import React from "react";
import { twMerge } from "tailwind-merge";

const Loader = ({ className }) => {
	return (
		<div
			className={twMerge(
				"size-4 border-2 border-white rounded-full animate-spin border-e-black",
				className
			)}
		></div>
	);
};

export default Loader;
