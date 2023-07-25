import React, { useReducer } from "react";
import { createContext } from "react";
export const GlobalContext = createContext();
import reducer from "../reducer/reducer";

const initialValue = [];

const ContextAPI = ({ children }) => {
	const [notes, dispatch] = useReducer(reducer, initialValue);

	return (
		<GlobalContext.Provider value={{ notes, dispatch }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default ContextAPI;
