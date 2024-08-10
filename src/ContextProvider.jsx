import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();
const ContextProvider = ({ children }) => {
	const [session, setSession] = useState(null);

	useEffect(() => {
		const token = localStorage.getItem("supabaseToken");
		setSession(token);
	}, [session]);

	return (
		<GlobalContext.Provider value={{ session, setSession }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default ContextProvider;
