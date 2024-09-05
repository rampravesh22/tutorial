// form actions
const ACTIONS = {
	UPDATE_PERSONAL_DETAIL: "UPDATE_PERSONAL_DETAIL",
	ADD_SKILL: "ADD_SKILL",
	REMOVE_SKILL: "REMOVE_SKILL",
	UPDATE_TECH_SKILL_CHANGE_INPUT: "UPDATE_TECH_SKILL_CHANGE_INPUT",
	WORK_EXPERIENCE_CHANGE: "HANDLE_EXPERIENCE_CHANGE",
	ADD_EXP_ROW: "ADD_EXP_ROW",
};

// form action creators
const updatePersonalDetail = (name, value) => {
	return {
		type: ACTIONS.UPDATE_PERSONAL_DETAIL,
		payload: {
			name,
			value,
		},
	};
};

const addSkill = () => {
	return { type: ACTIONS.ADD_SKILL };
};

const removeSkill = () => {
	return { type: ACTIONS.REMOVE_SKILL };
};

const updateTechSkillChangeInput = (index, name, value) => {
	// Fix the function name here
	return {
		type: ACTIONS.UPDATE_TECH_SKILL_CHANGE_INPUT, // Correct action type here
		payload: { index, name, value },
	};
};

const WorkExperienceChange = (index, name, value) => {
	return {
		type: ACTIONS.HANDLE_EXPERIENCE_CHANGE,
		payload: { index, name, value },
	};
};

const addExpRow = () => {
	return {
		type: ACTIONS.ADD_EXP_ROW,
	};
};

// form reducer
const formReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.UPDATE_PERSONAL_DETAIL: {
			return {
				...state,
				personalDetails: {
					...state.personalDetails,
					[action.payload.name]: action.payload.value,
				},
			};
		}
		case ACTIONS.ADD_SKILL: {
			return {
				...state,
				technicalSkills: [
					...state.technicalSkills,
					{ skillKey: "", skillValue: "" },
				],
			};
		}
		case ACTIONS.REMOVE_SKILL: {
			return {
				...state,
				technicalSkills: state.technicalSkills.slice(0, -1),
			};
		}
		case ACTIONS.UPDATE_TECH_SKILL_CHANGE_INPUT: {
			const { index, name, value } = action.payload;
			const updatedSkills = state.technicalSkills.map((skill, ind) =>
				ind === index ? { ...skill, [name]: value } : skill
			);
			return { ...state, technicalSkills: updatedSkills };
		}

		case ACTIONS.WORK_EXPERIENCE_CHANGE: {
			const { index, name, value } = action.payload;
			const updatedExp = state.workExperience.map((exp, ind) => {
				return ind === index ? { ...exp, [name]: value } : exp;
			});
			return { ...state, workExperience: updatedExp };
		}

		case ACTIONS.ADD_EXP_ROW: {
			return {
				...state,
				workExperience: [
					...state.workExperience,
					{ companyName: "", startDate: "", endDate: "", description: "" },
				],
			};
		}

		default: {
			return state;
		}
	}
};

export default formReducer;

export {
	updatePersonalDetail, // Fix the export name here
	addSkill,
	updateTechSkillChangeInput, // Fix the export name here
	removeSkill,
	WorkExperienceChange,
	addExpRow,
};
