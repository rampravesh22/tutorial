import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./features/todoSlice";
import Todo from "./components/Todo";

function App() {
	const dispatch = useDispatch();

	return (
		<div className="h-screen flex gap-4 flex-col p-10 bg-gray-300 m-auto w-1/2">
			<div className="form">
				<form action="">
					<input
						type="text"
						placeholder="Enter your todo"
						className="h-12 w-full  text-2xl px-4 rounded-md focus:outline-none focus:ring-2"
					/>
				</form>
			</div>
			<div className="todo">
				<Todo />
			</div>
		</div>
	);
}

export default App;
