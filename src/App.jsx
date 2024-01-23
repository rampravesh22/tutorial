import { useEffect } from "react";
import supabase from "./supabaseClient";
import { useState } from "react";

function App() {
	const [todos, setTodos] = useState([]);
	useEffect(() => {
		const getData = async () => {
			try {
				let { data: todos, error } = await supabase
					.from("todo")
					.select("*");
				console.log("todo", todos);
				console.log("error", error);
				setTodos(todos);
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, []);
	return (
		<>
			<div className="bg-red-500 text-center py-5">
				{JSON.stringify(todos)}
			</div>
		</>
	);
}

export default App;
