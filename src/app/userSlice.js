import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	token: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state, action) => {
			return { ...state, token: action.payload };
		},
	},
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
