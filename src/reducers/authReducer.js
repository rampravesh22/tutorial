const initialState = {
	user: null,
	isAuthenticated: false,
	error: null,
	token: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case "LOGIN_SUCCESS":
			return {
				...state,
				user: action.payload.user,
				isAuthenticated: true,
				error: null,
				token: action.payload.token,
			};
		case "LOGIN_FAILURE":
			return {
				...state,
				user: null,
				isAuthenticated: false,
				error: action.payload,
			};

		case "REGISTER_SUCCESS":
			return {
				...state,
				user: action.payload,
				error: null,
			};

		case "REGISTER_FAILURE":
			return {
				...state,
				user: null,
				error: action.payload,
			};
		case "LOGOUT":
			localStorage.removeItem("token");
			localStorage.removeItem("user");

			return { ...state, user: null, isAuthenticated: false, error: null };
		default:
			return state;
	}
};

export default authReducer;
