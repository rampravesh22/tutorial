import { createContext, useEffect, useState } from "react";
import supabase from "./supabaseClient";

export const GlobalContext = createContext();

const ContenxtProvider = ({ children }) => {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		async function getData() {
			try {
				setLoading(true);
				const { data } = await supabase.from("todos").select("*");
				setTodos(data);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		}
		getData();
	}, []);
	const value = {
		todos,
		setTodos,
		loading,
		setLoading,
	};

	return (
		<GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
	);
};

export default ContenxtProvider;
