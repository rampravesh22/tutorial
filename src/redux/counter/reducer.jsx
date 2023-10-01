import { INCREMENT, DECREMENT, INCREMENT_BY_NUMBER } from "./actionTypes";
const initialState = {
	count: 1,
};
const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return { count: state.count + 1 };

		case DECREMENT:
			return { count: state.count - 1 };

		case INCREMENT_BY_NUMBER:
			return { count: state.count + action.payload.count };
		default:
			return state;
	}
};

export default counterReducer;
