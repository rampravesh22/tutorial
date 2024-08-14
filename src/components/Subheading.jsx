import React from "react";

const Subheading = ({ subHeading, value }) => {
	return (
		<div>
			<span className="font-bold"> ➔ {subHeading}: </span>
			<span className="">{value}.</span>
		</div>
	);
};

export default Subheading;
