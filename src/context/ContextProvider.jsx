import React, { createContext, useEffect, useState } from "react";
export const GlobalContext = createContext();
const ContextProvider = ({ children }) => {
	const [token, setToken] = useState(null);
	useEffect(() => {
		setToken(localStorage.getItem("token"));
	}, [token]);
	return (
		<GlobalContext.Provider value={{ token, setToken }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default ContextProvider;
