import React, { createContext, useEffect, useState } from "react";
import supabase from "./supabaseClient";

const GlobalContext = createContext();
const ContextProvider = ({ children }) => {
	const [session, setSession] = useState(null);
	useEffect(() => {
		const fetchSession = async () => {
			const { data } = await supabase.auth.getSession();
			setSession(data);
			const { data: authListener } = await supabase.auth.onAuthStateChange(
				(event, session) => {
					console.log(session);
					setSession(session);
				}
			);

			return () => {
				authListener?.unsubscribe();
			};
		};
		fetchSession();
	}, []);
	return (
		<GlobalContext.Provider value={{ session, setSession }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default ContextProvider;
