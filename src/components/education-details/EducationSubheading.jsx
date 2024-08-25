import React from "react";

const EducationSubheading = ({ college, branch, percentage, address }) => {
	return (
		<div className="flex px-2 justify-between">
			<div className="flex">
				<div className="font-extralight">➔ </div>
				<div className="flex flex-col ">
					<span className="font-semibold">{college}</span>
					<div>
						<span>{branch}-</span>
						<span>{percentage}</span>
					</div>
				</div>
			</div>
			<div className="pl-4 flex-col flex">
				<span className="">{address}</span>
			</div>
		</div>
	);
};

export default EducationSubheading;
{
	/* <div className="flex px-2 ">
	<div className="print:font-semibold">➔ </div>
	<div>
		<span className="font-semibold  text-nowrap"> {subHeading}: </span>
		<span className="">{value}.</span>
	</div>
</div>; */
}
