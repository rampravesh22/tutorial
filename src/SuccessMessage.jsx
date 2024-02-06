import React from "react";

const SuccessMessage = ({ children, check }) => {
	return (
		<>
			<div
				className={`${
					check ? "translate-y-0" : "-translate-y-[110%]"
				} w-1/2 z-50 fixed top-1 text-center bg-green-700 py-2 rounded-md transition-all uppercase text-white`}
			>
				{children}
			</div>
		</>
	);
};

export default SuccessMessage;
