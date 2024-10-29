import axios from "axios";
import { BASE_URL } from "../../utils/api";
import { ADD_TODO, FETCH_ALL_TODO } from "../action-types/todoActionTypes";

export const fetchAllTodo = () => async (dispatch, getState) => {
	const { token } = getState().auth;
	try {
		const { data } = await axios.get(`${BASE_URL}/todo/get-all`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		dispatch({ type: FETCH_ALL_TODO, payload: { todos: data } });
	} catch (error) {
		console.log(error);
	}
};

export const addTodo = (title) => async (dispatch, getState) => {
	const { token } = getState().auth;
	try {
		const { data } = await axios.post(
			`${BASE_URL}/todo/add`,
			{ title },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		dispatch({ type: ADD_TODO, payload: { todo: data.todo } });
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};
