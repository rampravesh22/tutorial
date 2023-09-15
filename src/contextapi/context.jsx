import { createContext, useState } from "react";

export const GlobalContext = createContext();
const ContextProvider = ({ children }) => {
	const [loading, setLoding] = useState(false);
	const state = {
		loading,
		setLoding,
	};
	return (
		<GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
	);
};

export default ContextProvider;
