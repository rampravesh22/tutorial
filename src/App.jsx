import { useState, useEffect } from "react";
import supabase from "./supabaseClient";
const App = () => {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [title, setTitle] = useState("");

	useEffect(() => {
		const getStudents = async () => {
			try {
				setLoading(true);

				let res = await supabase.from("todo").select("*");

				if (res.error) {
					console.log("error occured", error);
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

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const res = await supabase.from("todo").insert([{ title }]).single();
			if (res.error) {
				throw Error("there is some error while creating row");
			}
			if (res.data) {
				setLoading(false);
			}
			console.log(res.data);
		} catch (error) {
			setLoading(false);
		}
	};
	return (
		<>
			{!loading &&
				todos.map((todo, index) => <div key={index}>{todo.name}</div>)}
			<div className="flex justify-center mt-5">
				<div className="shadow-md w-1/2 p-3 h-[200px] max-w-[400px] min-w-[300px]">
					<form
						action=""
						onSubmit={handleSubmit}
						method="post"
						className="flex flex-col"
					>
						<h2 className="text-center border-2 bg-gray-700 text-white mb-6 py-1.5 text-xl uppercase rounded-md">
							Add Todo
						</h2>
						<input
							type="text"
							onChange={(e) => setTitle(e.target.value)}
							id="title"
							name="title"
							autoComplete="off"
							value={title}
							required
							autoFocus
							className="border border-gray-600 w-full placeholder:capitalize h-10 px-2 rounded focus:outline-purple-600"
							placeholder="title"
						/>
						<br />

						<button
							type="submit"
							className="bg-purple-600 self-end text-white px-7 py-1 rounded hover:bg-purple-700 mt-"
						>
							+ Add
						</button>
					</form>
				</div>
			</div>
			{loading && (
				<div
					className={` w-full mt-4 transition-all inset-0 backdrop-blur-md  py-5 flex items-center justify-center`}
				>
					<div className="w-10 h-10 mx-auto  rounded-full border-[3px] border-e-black animate-spin"></div>
				</div>
			)}
		</>
	);
};

export default App;
