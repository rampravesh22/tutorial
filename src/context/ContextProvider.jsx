import React, { createContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
export const GlobalContext = createContext();
const ContextProvider = ({ children }) => {
	const fetchData = async () => {
		const { data, error } = await supabase.from("resume").select("*").single();

		if (error) console.log("Error fetching resume:", error);
		else {
			console.log(data);
			setData(data);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const [data, setData] = useState(null);
	return (
		<GlobalContext.Provider value={{ data, setData }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default ContextProvider;
