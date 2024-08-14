import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import TechnicalSkills from "./TechnicalSkills";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Certification from "./Certification";

const Resume = ({ data }) => {
	const componentRef = useRef();

	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
		documentTitle: `${data.name}_Resume`,
		pageStyle: "background",
	});

	return (
		<div className=" text-black  min-h-screen ">
			<div className="text-center mt-2">
				<button
					onClick={handlePrint}
					className="bg-yellow-400 no-print text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500"
				>
					Download Resume
				</button>
			</div>
			<div
				className="max-w-4xl m-4 mx-auto border border-black  page  rounded-lg print:px-0.5 p-8"
				ref={componentRef}
			>
				{/* Header Section */}
				<div className="text-center mb-4 flex justify-between">
					<h3 className="text-3xl font-bold">{"Rampravesh Chaudhari"}</h3>
					<p className="text-lg mt-2 text-blue-600">
						{data.email} | {data.phone}
					</p>
				</div>

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
