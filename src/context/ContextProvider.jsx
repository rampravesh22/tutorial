import React, { createContext, useEffect, useState } from "react";
export const GlobalContext = createContext();
const ContextProvider = ({ children }) => {
	const [token, setToken] = useState(null);
	const [name, setName] = useState("");
	useEffect(() => {
		setToken(localStorage.getItem("token"));
	}, [token]);
	return (
		<GlobalContext.Provider value={{ token, setToken, name, setName }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default ContextProvider;
