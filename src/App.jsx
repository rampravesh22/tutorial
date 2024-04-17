import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import supabase from "./supabaseClient";

function App() {
	useEffect(() => {
		const getTodos = async () => {
			const res = await supabase.from("todo_table").select("*");
			console.log(res.data);
		};
		getTodos();
	}, []);
	const [show, setShow] = useState(false);
	const [todos, setTodos] = useState([
		{ id: new Date(), title: "first todo" },
		{ id: new Date(), title: "first todo" },
	]);
	useEffect(() => {
		document.body.style.overflow = show ? "hidden" : "auto";
	}, [show]);

	return (
		<div className="h-screen bg-gray-300">
			<div className=" p-5   container m-auto">
				<h1 className="text-center bg-zinc-900 text-white py-3 rounded text-3xl">
					Todo List
				</h1>
				<div className="text-center">
					<button
						onClick={() => setShow(true)}
						className="bg-zinc-900 hover:bg-zinc-800 my-4 text-white px-7 py-2 rounded"
					>
						Add Todo
					</button>
				</div>
				<ul className="bg-white space-y-2 min-h-[400px] p-2">
					{todos.map((todo, index) => (
						<li className="border p-2 rounded border-zinc-800" key={index}>
							{todo.title}
						</li>
					))}
				</ul>
			</div>
			<AddTodo
				todos={todos}
				setTodos={setTodos}
				show={show}
				setShow={setShow}
			/>
		</div>
	);
}

export default App;
