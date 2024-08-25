import React from "react";

const CertificationSubheading = ({ certification, portal }) => {
	return (
		<div className="flex px-2 justify-between">
			<div className="">
				➔<span className="">{certification}</span>
			</div>
			<div className="flex">
				<span>{portal}</span>
			</div>
		</div>
	);
};

export default CertificationSubheading;
