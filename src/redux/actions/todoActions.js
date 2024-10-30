import axios from "axios";
import { BASE_URL } from "../../utils/api";
import {
	ADD_TODO,
	DELETE_TODO,
	FETCH_ALL_TODO,
	UPDATE_TODO,
} from "../action-types/todoActionTypes";

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

export const updateTodo = (checked, id) => async (dispatch, getState) => {
	const { token } = getState().auth;
	try {
		const { data } = await axios.put(
			`${BASE_URL}/todo/update/${id}`,
			{ completed: checked },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		dispatch({ type: UPDATE_TODO, payload: { id: data._id } });
	} catch (error) {
		console.log(error);
	}
};

export const deleteTodo = (id) => async (dispatch, getState) => {
	const { token } = getState().auth;
	try {
		const { data } = await axios.delete(`${BASE_URL}/todo/delete/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		dispatch({ type: DELETE_TODO, payload: { id: id } });
	} catch (error) {
		console.log(error);
	}
};
