import React, { createContext, useContext, useState } from "react";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [isLogged, setIsLogged] = useState(localStorage.getItem("token"));
	return (
		<AuthContext.Provider value={{ isLogged, setIsLogged }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
