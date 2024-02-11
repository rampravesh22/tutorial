import { createContext, useEffect, useState } from "react";
import supabase from "./supabaseClient";

export const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [loginModal, setLoginModal] = useState(false);
	const [registerModal, setRegisterModal] = useState(false);
	const [token, setToken] = useState(null);
	useEffect(() => {
		setToken(localStorage.getItem("token"));
		const getData = async () => {
			try {
				setLoading(true);
				const { data, error } = await supabase.from("todos").select("*");
				setTodos(data);
				if (error) {
					console.log(error);
				}
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, []);
	const value = {
		todos,
		setTodos,
		loading,
		setLoading,
		loginModal,
		setLoginModal,
		registerModal,
		setRegisterModal,
		token,
		setToken,
	};

	return (
		<GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
	);
};

export default ContextProvider;
