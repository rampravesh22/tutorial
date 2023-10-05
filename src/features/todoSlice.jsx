import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: [],
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			return { value: [...state.value, action.payload] };
		},
		setTodo: (state, action) => {
			return { value: action.payload };
		},
		deleteTodo: (state, action) => {
			return {
				value: state.value.filter((todo) => todo.id !== action.payload),
			};
		},
	},
});

export const { addTodo, setTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
