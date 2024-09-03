import React, { useReducer } from "react";
import { Input, Button } from "@nextui-org/react";

// Reducer function
const formReducer = (state, action) => {
	switch (action.type) {
		case "UPDATE_PERSONAL_DETAIL": {
			return {
				...state,
				personalDetails: {
					...state.personalDetails,
					[action.name]: action.value,
				},
			};
		}
		case "ADD_SKILL": {
			return {
				...state,
				technicalSkills: [
					...state.technicalSkills,
					{ skillKey: "", skillValue: "" },
				],
			};
		}

		case "REMOVE_SKILL": {
			return;
		}
		case "UPDATE_SKILL": {
			const updatedSkills = state.technicalSkills.map((skill, index) =>
				index === action.index
					? { ...skill, [action.name]: action.value }
					: skill
			);
			return { ...state, technicalSkills: updatedSkills };
		}
		default: {
			return state;
		}
	}
};

const ResumeForm = () => {
	const initialState = {
		personalDetails: { fullName: "", email: "", phone: "" },
		technicalSkills: [{ skillKey: "", skillValue: "" }],
	};

	const [state, dispatch] = useReducer(formReducer, initialState);

	const handlePersonalDetailsChange = (e) => {
		dispatch({
			type: "UPDATE_PERSONAL_DETAIL",
			name: e.target.name,
			value: e.target.value,
		});
	};

	const handleTechnicalSkillChange = (index, e) => {
		dispatch({
			type: "UPDATE_SKILL",
			index,
			name: e.target.name,
			value: e.target.value,
		});
	};

	const handleAddSkill = () => {
		dispatch({ type: "ADD_SKILL" });
	};

	return (
		<div className="rounded-md border border-black m-6 max-w-3xl mx-auto w-[90%]">
			<form>
				<div className="p-4">
					<h1 className="text-center font-bold mb-2">Personal Details</h1>
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
					<h1 className="text-center font-bold mb-2">Technical Skills</h1>
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
							onClick={handleAddSkill}
							className="mt-2"
						>
							+ Add Skill
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ResumeForm;
