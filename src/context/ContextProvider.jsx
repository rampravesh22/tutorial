import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");
	const [genres, setGenres] = useState([]);
	const [loading, setLoading] = useState(false);
	const value = {
		theme,
		setTheme,
		genres,
		setGenres,
		loading,
		setLoading,
	};
	useEffect(() => {
		// theme management
		const darkThemeValue = localStorage.getItem("darkTheme");
		if (darkThemeValue === "dark") {
			setTheme(darkThemeValue);
		}
	}, []);
	return (
		<GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
	);
};

export default ContextProvider;
