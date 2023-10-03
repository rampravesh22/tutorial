import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: [],
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			console.log(state.value);
			console.log(action.payload);
			return { value: [...state.value, action.payload] };
		},
	},
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
