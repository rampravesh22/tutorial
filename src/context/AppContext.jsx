import { createContext } from "react";

export const GlobalContext = createContext();

const AppContext = ({ children }) => {
	return (
		<>
			<GlobalContext.Provider value={{ test: 34 }}>
				{children}
			</GlobalContext.Provider>
		</>
	);
};
export default AppContext;
