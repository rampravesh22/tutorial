import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
	const [students, setStudents] = useState([]);
	useEffect(() => {
		const getStudents = async () => {
			try {
				const res = await axios.get("http://localhost:3000/students");
				setStudents(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		getStudents();
	}, []);
	return (
		<GlobalContext.Provider value={{ students, setStudents }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default ContextProvider;
