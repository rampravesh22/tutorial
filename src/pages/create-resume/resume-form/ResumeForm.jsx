import React, { useReducer } from "react";
import { Input, Button, Textarea, DateInput } from "@nextui-org/react";
import formReducer, {
	addSkill,
	updateTechSkillChangeInput,
	updatePersonalDetail,
	WorkExperienceChange,
	addExpRow,
} from "../../../redcuers/formReducer.js";

// Reducer function
const ResumeForm = () => {
	const initialState = {
		personalDetails: { fullName: "", email: "", phone: "" },
		technicalSkills: [{ skillKey: "", skillValue: "" }],
		workExperience: [
			{ companyName: "", startDate: "", endDate: "", description: "" },
		],
	};
	const [state, dispatch] = useReducer(formReducer, initialState);

	const handlePersonalDetailsChange = (e) => {
		dispatch(updatePersonalDetail(e.target.name, e.target.value));
	};

	const handleTechnicalSkillChange = (index, e) => {
		dispatch(updateTechSkillChangeInput(index, e.target.name, e.target.value));
	};

	const handleAddSkillRow = () => {
		dispatch(addSkill());
	};

	const handleWorkExperienceChange = (index, e) => {
		dispatch(WorkExperienceChange(index, e.target.name, e.target.value));
	};

	console.table(state.workExperience);

	const handleAddSExpRow = () => {
		dispatch(addExpRow());
	};
	return (
		<div className="rounded-md border border-black m-6 max-w-3xl mx-auto w-[90%]">
			<form className="flex flex-col gap-10">
				<div className="p-4">
					<h1 className="text-center font-bold mb-2 border w-fit mx-auto px-5 py-2 rounded-large border-secondary">
						Personal Details
					</h1>
					<div className="flex flex-col gap-4">
						<Input
							type="text"
							name="fullName"
							label="Full Name"
							value={state.personalDetails.fullName}
							variant="bordered"
							maxLength={200}
							onChange={handlePersonalDetailsChange}
						/>
						<Input
							type="email"
							name="email"
							label="Email"
							value={state.personalDetails.email}
							variant="bordered"
							maxLength={150}
							onChange={handlePersonalDetailsChange}
						/>
						<Input
							type="tel"
							name="phone"
							label="Contact Number"
							value={state.personalDetails.phone}
							variant="bordered"
							pattern="^\+?[1-9]\d{1,14}$"
							minLength={10}
							maxLength={10}
							helperText="Please enter a valid 10-digit phone number"
							onChange={handlePersonalDetailsChange}
						/>
					</div>
				</div>
				<div className="p-4">
					<h1 className="text-center font-bold mb-2 border w-fit mx-auto px-5 py-2 rounded-large border-secondary">
						Technical Skills
					</h1>
					<div className="flex flex-col gap-4">
						{state.technicalSkills.map((techSkill, index) => (
							<div key={index} className="flex gap-2 items-center">
								<Input
									type="text"
									name="skillKey"
									label="Skill Name"
									value={techSkill.skillKey}
									variant="bordered"
									maxLength={200}
									onChange={(e) => handleTechnicalSkillChange(index, e)}
								/>
								<Input
									type="text"
									name="skillValue"
									label="Skill Value"
									value={techSkill.skillValue}
									variant="bordered"
									maxLength={200}
									onChange={(e) => handleTechnicalSkillChange(index, e)}
								/>
							</div>
						))}
						<Button
							auto
							flat
							color="primary"
							onClick={handleAddSkillRow}
							className="mt-2"
						>
							+ Add Skill Row
						</Button>
					</div>
				</div>
				{/* +++++++++++++++++work experience+++++++++++++++++++++++++++++ */}
				{/* work experience */}
				<div className="p-4">
					<h1 className="text-center font-bold mb-2 border w-fit mx-auto px-5 py-2 rounded-large border-secondary">
						Work Experience
					</h1>
					<div className="flex flex-col gap-4">
						{state.workExperience.map((experience, index) => (
							<div
								key={index}
								className="flex gap-2 items-center flex-col border p-2 border-slate-400 rounded-md"
							>
								<div className="flex gap-2">
									<Input
										type="text"
										name="companyName"
										label="Company Name"
										value={experience.companyName}
										variant="bordered"
										maxLength={200}
										onChange={(e) => handleWorkExperienceChange(index, e)}
									/>
									<DateInput
										name="startDate"
										label="Start Date"
										value={
											experience.startDate
												? new Date(experience.startDate)
												: null
										}
										onChange={(value) => {
											handleWorkExperienceChange(index, {
												target: { name: "startDate", value },
											});
										}}
									/>
									<DateInput
										name="endDate"
										label="End Date"
										value={
											experience.endDate ? new Date(experience.endDate) : null
										}
										onChange={(value) =>
											handleWorkExperienceChange(index, {
												target: { name: "endDate", value },
											})
										}
									/>
								</div>
								<Textarea
									name="description"
									label="Description"
									value={experience.description}
									variant="bordered"
									maxLength={2000}
									onChange={(e) => handleWorkExperienceChange(index, e)}
								/>
							</div>
						))}
						<Button
							type="button"
							auto
							flat
							color="primary"
							onClick={handleAddSExpRow}
							className="mt-2"
						>
							+ Add Experience Row
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ResumeForm;
