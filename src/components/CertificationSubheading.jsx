import React from "react";

const CertificationSubheading = ({ certification, portal }) => {
	return (
		<div className="flex">
			<span className="font-bold">➔</span>
			<div className="flex flex-grow justify-between">
				<div>{certification}</div>
				<div>{portal}</div>
			</div>
		</div>
	);
};

export default CertificationSubheading;
