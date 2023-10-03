import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: [],
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			return { value: [action.payload, ...state.value] };
		},
	},
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
