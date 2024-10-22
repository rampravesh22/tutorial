import {
	FETCH_ALL_REQUEST,
	FETCH_ALL_SUCCESS,
	FETCH_ALL_FAIL,
	FETCH_ONE_REQUEST,
	FETCH_ONE_SUCCESS,
	FETCH_ONE_FAIL,
	DELETE_REQUEST,
	DELETE_SUCCESS,
	DELETE_FAIL,
	CREATE_REQUEST,
	CREATE_SUCCESS,
	CREATE_FAIL,
} from "../action-types/blogActionTypes";
import api from "../../utls/api";
import toast from "react-hot-toast";
import toastC from "../../utls/cutomToast";

export const fetchBlogs = () => async (dispatch, getState) => {
	try {
		dispatch({ type: FETCH_ALL_REQUEST });
		const { data } = await api.get("/blog/blogs");

		dispatch({ type: FETCH_ALL_SUCCESS, payload: { blogs: data } });
	} catch (error) {
		dispatch({ type: FETCH_ALL_FAIL, payload: { error } });
	}
};

export const fetchSingleBlog = (id) => async (dispatch) => {
	try {
		dispatch({ type: FETCH_ONE_REQUEST });
		const { data } = await api.get(`/blog/get-blog/${id}`);
		dispatch({ type: FETCH_ONE_SUCCESS, payload: { blog: data } });
	} catch (error) {
		console.log(error);
		dispatch({ type: FETCH_ONE_FAIL, payload: { error: error } });
	}
};

export const deleteBlog = (id) => async (dispatch) => {
	try {
		dispatch({ type: DELETE_REQUEST });
		const { data } = await api.delete(`/blog/delete-blog/${id}`);
		toastC.success("Deleletion success.", {
			duration: 4000,
			style: {
				border: "1px solid #4caf50",
			},
		});
		dispatch({ type: DELETE_SUCCESS, payload: { id } });
	} catch (error) {
		console.log(error);
		dispatch({ type: DELETE_FAIL });
	}
};

export const createBlog = (blog) => async (dispatch) => {
	try {
		dispatch({ type: CREATE_REQUEST });
		const { data } = await api.post("/blog/add-blog", blog);
		dispatch({ type: CREATE_SUCCESS, payload: { blog: data } });
		toastC.success("Blog Creating Successful.");
	} catch (error) {
		console.log("error", error);
		dispatch({ type: CREATE_FAIL });
	}
};
