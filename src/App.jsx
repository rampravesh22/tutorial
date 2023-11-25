import { createClient } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import supabase from "./supabaseClient";
function App() {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	useEffect(() => {
		const getStudents = async () => {
			try {
				setLoading(true);

				let res = await supabase.from("todo").select("*");

				if (res.error) {
					console.log(error);
				}
				setTimeout(() => {
					setLoading(false);
					setTodos(res.data);
					setLoading(false);
					console.log("todo", res.data);
				}, 2000);
			} catch (error) {
				console.log("error occurred", error);
				setLoading(false);
			}
		};
		getStudents();
	}, []);

	const handleSubmit = async () => {
		try {
			const res = await supabase
				.from("todo")
				.insert([{ title, description }])
				.select();
			if (res.error) {
				throw Error("there is some error while creating row");
			}
			console.log(res.data);
		} catch (error) {}
	};
	return (
		<>
			{loading && (
				<div
					className={` w-full  fixed mt-0 transition-all inset-0 backdrop-blur-md  py-5 flex items-center justify-center`}
				>
					<div className="w-16 h-16 mx-auto  rounded-full border-[7px] border-e-black animate-spin"></div>
				</div>
			)}
			{!loading &&
				todos.map((todo, index) => <div key={index}>{todo.name}</div>)}
			<div className="flex justify-center mt-5">
				<div className="shadow-md w-1/2 p-3">
					<form action="" onSubmit={handleSubmit}>
						<h2 className="text-center bg-purple-600 text-white mb-6 py-1.5 text-xl uppercase rounded-md">
							Add Todo
						</h2>
						<input
							type="text"
							onChange={(e) => setTitle(e.target.value)}
							id="title"
							name="title"
							autoComplete="off"
							required
							autoFocus
							className="border w-full placeholder:capitalize h-10 px-2 rounded focus:outline-purple-600"
							placeholder="title"
						/>
						<br />
						<textarea
							onChange={(e) => setDescription(e.target.value)}
							name="description"
							id="description"
							required
							cols="30"
							placeholder="description"
							className="w-full border placeholder:capitalize mt-4 p-2 h-24 rounded resize-none focus:outline-purple-600"
							rows="10"
						></textarea>
						<button className="bg-purple-600 text-white px-7 py-1 rounded hover:bg-purple-700 mt-4">
							Submit
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default App;
