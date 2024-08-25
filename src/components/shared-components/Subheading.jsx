import React from "react";

const Subheading = ({ subHeading, value }) => {
	return (
		<div className="flex px-2 ">
			<div className="">➔ </div>
			<div>
				<span className="font-semibold  text-nowrap"> {subHeading}: </span>
				<span className="">{value}.</span>
			</div>
		</div>
	);
};

export default Subheading;
