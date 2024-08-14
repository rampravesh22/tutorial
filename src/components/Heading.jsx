import React from "react";

const Heading = ({ children }) => {
	return (
		<div className="font-bold bg-zinc-300 p-1 text-lg font-inter">
			{children}:
		</div>
	);
};

export default Heading;
