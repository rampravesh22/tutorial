import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

function App() {
	return (
		<div className="h-screen flex gap-4 flex-col p-10 bg-gray-300 m-auto w-3/4">
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
