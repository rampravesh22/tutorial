const initialState = {
	blogs: [],
	loading: false,
	error: null,
};

export const blogListReducer = (state = initialState, action) => {
	switch (action.type) {
		case "BLOG_REQUEST":
			return { ...state, loading: true };

		case "BLOG_SUCCESS":
			return { ...state, loading: false, blogs: action.payload };

		case "BLOG_FAIL":
			return { ...state, loading: false, error: action.payload };

		default:
			return state;
	}
};
