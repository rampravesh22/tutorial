import React from "react";

const EducationSubheading = ({ college, branch, percentage, address }) => {
	return (
		<div>
			<div className="flex justify-between">
				<span className="font-bold"> ➔ {college}</span>
				<span className="">{address}</span>
			</div>
			<div className="pl-4">
				<span>{branch}-</span>
				<span>{percentage}</span>
			</div>
		</div>
	);
};

export default EducationSubheading;
