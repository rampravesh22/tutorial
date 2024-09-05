import ACTIONS from "./actions";
const newTodo = (name) => {
	return {
		id: Date.now(),
		name,
		complete: false,
		addDate: new Date(),
	};
};

const reducer = (todos, action) => {
	switch (action.type) {
		// load todo
		case ACTIONS.LOAD_TODOS:
			return JSON.parse(localStorage.getItem("todos"));
		case ACTIONS.ADD_TODO: {
			const todo = newTodo(action.payload.name);
			const resultTodos = [todo, ...todos];
			localStorage.setItem("todos", JSON.stringify(resultTodos));
			return [todo, ...todos];
		}

		// delete todo
		case ACTIONS.DELETE_TODO: {
			console.log(action.payload.id);
			const updatedTodo = todos.filter((todo) => {
				return todo.id !== action.payload.id;
			});
			console.log(updatedTodo);
			localStorage.setItem("todos", JSON.stringify(updatedTodo));
			return updatedTodo;
		}

		// mark complete
		case ACTIONS.MARK_COMPLETE: {
			return todos;
		}

		// toggle todo
		case ACTIONS.TOGGLE_TODO: {
			const data = todos.map((todo) =>
				todo.id === action.payload.id
					? { ...todo, complete: !todo.complete }
					: todo
			);
			localStorage.setItem("todos", JSON.stringify(data));
			return data;
		}

		// default return
		default:
			return todos;
	}
};

export default reducer;
