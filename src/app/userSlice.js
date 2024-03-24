import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	token: null,
	userData: {},
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state, action) => {
			return { ...state, userData: action.payload };
		},
	},
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
