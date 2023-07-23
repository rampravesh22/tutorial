import { useEffect, useState } from "react";
import { createContext } from "react";
import Home from "./Home";
import axios from "axios";
import AddStudent from "./AddStudent";

export const GlobalContext = createContext();

function App() {
	const [load, setLoad] = useState(false);
	const [students, setStudents] = useState([]);
	useEffect(() => {
		const getStudent = async () => {
			setLoad(true);
			try {
				const res = await axios.get(
					"https://studentsapi.vercel.app/studentapi/"
				);
				setStudents(res.data);
				setLoad(false);
			} catch (error) {
				console.log(error);
			}
		};
		getStudent();
	}, []);
	return (
		<GlobalContext.Provider value={{ students, setStudents, load, setLoad }}>
			<AddStudent />
			<Home />
		</GlobalContext.Provider>
	);
}

export default App;
