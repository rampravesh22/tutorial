import React from "react";

const Heading = ({ children }) => {
	return (
		<div className="font-semibold px-2 rounded-md bg-zinc-300 p-1 print:text-lg font-inter">
			{children}:
		</div>
	);
};

export default Heading;
