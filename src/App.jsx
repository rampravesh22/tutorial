import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setTodo } from "./features/todoSlice";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		const getData = async () => {
			const res = await axios.get("http://localhost:3000/todos");
			dispatch(setTodo(res.data));
		};
		getData();
	}, []);
	return (
		<div className="min-h-screen flex gap-4 flex-col p-10 bg-gray-300 m-auto max-w-[600px] w-3/4">
			<div className="form">
				<AddTodo />
			</div>
			<div className="todo">
				<Todo />
			</div>
		</div>
	);
}

export default App;
