import { createContext, useState } from "react";

export const IncidentContext = createContext();

const IncidentContextProvider = ({ children }) => {
	const [incidents, setIncidents] = useState(
		JSON.parse(localStorage.getItem("incidents")) || []
	);

	return (
		<IncidentContext.Provider value={{ incidents, setIncidents }}>
			{children}
		</IncidentContext.Provider>
	);
};

export default IncidentContextProvider;
