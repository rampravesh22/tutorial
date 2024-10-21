import {
	CREATE_FAIL,
	CREATE_REQUEST,
	CREATE_SUCCESS,
	DELETE_FAIL,
	DELETE_REQUEST,
	DELETE_SUCCESS,
	EDIT_FAIL,
	EDIT_REQUEST,
	EDIT_SUCCESS,
	FETCH_ALL_FAIL,
	FETCH_ALL_REQUEST,
	FETCH_ALL_SUCCESS,
	FETCH_ONE_FAIL,
	FETCH_ONE_REQUEST,
	FETCH_ONE_SUCCESS,
} from "../action-types/blogActionTypes";

const initialState = {
	blogs: [],
	loading: false,
	error: null,
	blog: {},
};

const blogReducer = (state = initialState, action) => {
	switch (action.type) {
		// fetch all blogs
		case FETCH_ALL_REQUEST:
			return { ...state, loading: true };

		case FETCH_ALL_SUCCESS:
			return { ...state, loading: false, blogs: action.payload.blogs };

		case FETCH_ALL_FAIL:
			return { ...state, loading: false, error: action.payload.error };

		// fetch on blog
		case FETCH_ONE_REQUEST:
			return { ...state, loading: true };

		case FETCH_ONE_SUCCESS:
			return { ...state, loading: false, blog: action.payload.blog };

		case FETCH_ONE_FAIL:
			return { ...state, loading: false, error: action.payload.error };

		// create blog
		case CREATE_REQUEST:
			return { ...state, loading: true };

		case CREATE_SUCCESS:
			return {
				...state,
				loading: false,
				blogs: [action.payload.blog, ...state.blogs],
			};

		case CREATE_FAIL:
			return { ...state, loading: false, error: action.payload.error };

		// delete blog
		case DELETE_REQUEST:
			return { ...state, loading: true };

		case DELETE_SUCCESS:
			return {
				...state,
				loading: false,
				blogs: state.blogs.filter((blog) => blog._id !== action.payload.id),
			};
		case DELETE_FAIL:
			return { ...state, loading: false, error: action.payload.error };

		// edit blog
		case EDIT_REQUEST:
			return { ...state, loading: true };

		case EDIT_SUCCESS:
			return {
				...state,
				loading: false,
				blogs: state.blogs.map((blog) =>
					blog._id === action.payload.id ? action.payload.blog : blog
				),
			};

		case EDIT_FAIL:
			return { ...state, error: action.payload.error };

		default:
			return state;
	}
};

export default blogReducer;
