import React from "react";
import { twMerge } from "tailwind-merge";

const MiniLoader = ({ className }) => {
	return (
		<span
			className={twMerge(
				"w-20 h-20 animate-spin rounded-full border border-e-black",
				className
			)}
		></span>
	);
};

export default MiniLoader;
