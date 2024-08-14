import React from "react";
import Heading from "./Heading";
import EducationSubheading from "./EducationSubheading";

const Education = () => {
	return (
		<div className="print:mt-30">
			<Heading>Education</Heading>
			<EducationSubheading
				college={"United College of Engineering and Research Prayagraj"}
				branch={"Bachelor of Technology in Computer Science"}
				percentage={"79%"}
				address={"Prayagraj Uttar Pradesh"}
			/>
			<EducationSubheading
				college={"M.C.I.C. Maharajganj"}
				branch={"Intermediate (XII)"}
				percentage={"82%"}
				address={"Maharajganj Uttar Pradesh"}
			/>
			<EducationSubheading
				college={"D.D.H.S Maharajganj"}
				branch={"Highschool"}
				percentage={"86%"}
				address={"Maharajganj Uttar Pradesh"}
			/>
		</div>
	);
};

export default Education;
