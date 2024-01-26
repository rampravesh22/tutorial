import Nav from "./Nav";
import AddTodo from "./AddTodo";
import ShowTodo from "./ShowTodo";
function App() {
	return (
		<div className="h-screen flex-col flex">
			<Nav />
			<AddTodo />
			<ShowTodo />
		</div>
	);
}

export default App;
