import React, { createContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
export const GlobalContext = createContext();
const ContextProvider = ({ children }) => {
	const [token, setToken] = useState(null);

	const login = (newToken) => {
		setToken(newToken);
		sessionStorage.setItem("token", newToken);
	};

	const logout = () => {
		setToken(null);
		localStorage.removeItem("token");
	};

	const fetchData = async () => {
		const { data, error } = await supabase.from("resume").select("*").single();

		if (error) console.log("Error fetching resume:", error);
		else {
			setData(data);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const [data, setData] = useState(null);
	return (
		<GlobalContext.Provider
			value={{ data, setData, token, setToken, login, logout }}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default ContextProvider;
