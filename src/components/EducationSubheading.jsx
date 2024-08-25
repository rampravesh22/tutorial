import React from "react";

const EducationSubheading = ({ college, branch, percentage, address }) => {
	return (
		<div>
			<div className="flex justify-between px-2">
				<span className="font-semibold"> ➔ {college}</span>
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
