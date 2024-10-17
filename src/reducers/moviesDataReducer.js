const initialState = {
	movies: [],
	loading: false,
	error: null,
};

const moviesDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_MOVIES_SUCCESS":
			return { ...state, movies: action.payload, loading: false, error: null };
		case "FETCH_MOVIES_FAILURE":
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export default moviesDataReducer;
