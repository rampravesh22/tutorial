import { ADD_BUG, REMOVE_BUG, RESOLVE_BUG } from "./actionTypes";

export const addBug = (description) => {
	return {
		type: ADD_BUG,
		payload: { description: description },
	};
};

export const removeBug = (id) => {
	return {
		type: REMOVE_BUG,
		payload: { id: id },
	};
};
export const resolveBug = (id) => {
	return {
		type: RESOLVE_BUG,
		payload: { id: id },
	};
};
