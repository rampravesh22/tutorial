import {
	BLOG_SUCCESS,
	BLOG_FAIL,
	BLOG_REQUEST,
} from "../action-types/blogActionTypes";
import api from "../../utls/api";

export const fetchBlogs = () => async (dispatch) => {
	try {
		dispatch({ type: BLOG_REQUEST });
		const { data } = await api.get("/blog/blogs");

		dispatch({ type: BLOG_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: BLOG_FAIL });
	}
};
