import React, { useState } from "react";
import ResumeForm from "./resume-form/ResumeForm";
import ResumeView from "./resume-view/ResumeView";

const CreateResume = () => {
	const [personalDetails, setPersonalDetails] = useState({
		fullName: "rampravesh chaudhari",
		email: "rampravesh@gmail.com",
		phone: "93388383838",
	});
	const [technicalSkills, setTechnicalSkills] = useState([
		{ skillKey: "language", skillValue: "Python, Javascript" },
		{ skillKey: "web dev", skillValue: "html, Javascript, css, tailwind" },
		{ skillKey: "tools", skillValue: "mysql, vscode" },
	]);
	return (
		<div className="flex flex-col">
			<div className="">
				<ResumeForm
					personalDetails={personalDetails}
					setPersonalDetails={setPersonalDetails}
					technicalSkills={technicalSkills}
					setTechnicalSkills={setTechnicalSkills}
				/>
			</div>
			<div>
				<ResumeView />
			</div>
		</div>
	);
};

export default CreateResume;
