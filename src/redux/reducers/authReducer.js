import { LOGIN } from "../action-types/authActionTypes";

const initialState = {
	isAuthenticated: false,
	user: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return { ...state, isAuthenticated: true, user: action.payload.user };

		default:
			return state;
	}
};

export default authReducer;
