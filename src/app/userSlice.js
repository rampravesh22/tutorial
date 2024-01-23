import { createSlice } from "@reduxjs/toolkit";
const initialState = {};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
