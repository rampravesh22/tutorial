import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import PersonalDetails from "./personal-details/PersonalDetails";
import Certification from "./certification-details/Certification";
import Education from "./education-details/Education";
import Projects from "./projects/Projects";
import TechnicalSkills from "./technical-skills/TechnicalSkills";
import WorkExperience from "./work-experience/WorkExperience";

const Resume = ({ data }) => {
	const componentRef = useRef();

	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
		documentTitle: `${data.name}_Resume`,
		pageStyle: "background",
	});

	return (
		<div className=" text-black m-2 min-h-screen font-nunito">
			<div className="text-center sticky top-2  flex justify-between px-2">
				<p className="text-lg font-roboto-mono bg-teal-800 rounded-md text-white px-4 py-1">
					Single page resume maker
				</p>
				<button
					onClick={handlePrint}
					className="bg-yellow-400   no-print text-gray-900 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-yellow-500"
				>
					Download Resume
				</button>
			</div>
			<div
				className="max-w-3xl m-4 mx-auto border border-black  page  rounded-lg print:px-0.5 p-8"
				ref={componentRef}
			>
				{/* Header Section */}
				<PersonalDetails data={data} />
				<div className="flex flex-col gap-4">
					<TechnicalSkills />
					<WorkExperience />
					<Projects />
					<Education />
					<Certification />
				</div>
			</div>
		</div>
	);
};

export default Resume;
