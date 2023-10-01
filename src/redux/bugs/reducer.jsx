import { ADD_BUG, REMOVE_BUG, RESOLVE_BUG } from "./actionTypes";
let bugId = 0;
const initialState = {
	bugs: [],
};
const createBug = (description) => {
	return {
		id: ++bugId,
		description: description,
		resolved: false,
		dateAdded: new Date(),
	};
};
const bugReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_BUG:
			return {
				bugs: [createBug(action.payload.description), ...state.bugs],
			};

		case REMOVE_BUG:
			return;
		case RESOLVE_BUG:
			return;

		default:
			return state;
	}
};

export default bugReducer;
