import React, { createContext, useEffect, useReducer, useState } from "react";
import studentReducer, { loadStudent } from "../reducers/noteReducers";
import axios from "axios";
import { BASE_URL } from "../api/api";
const initalStates = {
	students: [],
};
export const StudentGlobalContext = createContext();
const StudentContext = ({ children }) => {
	const [state, dispatch] = useReducer(studentReducer, initalStates);
	useEffect(() => {
		const loadStudents = async () => {
			try {
				const data = await axios.get(`${BASE_URL}/students`);
				console.log(data);
			} catch (error) {
				console.log(error);
			}
			loadStudents();
		};
		dispatch(loadStudent());
	}, []);

	return (
		<StudentGlobalContext.Provider value={{ state, dispatch }}>
			{children}
		</StudentGlobalContext.Provider>
	);
};

export default StudentContext;
