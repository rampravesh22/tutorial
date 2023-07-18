import React, { useRef, useState } from "react";
import { useReducer } from "react";
const ACTION = {
	ADD: "ADD",
	DELETE: "DELETE",
	TOGGLE: "TOGGLE",
};

const reducer = (todos, action) => {
	switch (action.type) {
		case ACTION.ADD:
			const data = {
				id: Date.now(),
				todo: action.payload.todoInput,
				complete: false,
			};
			return [...todos, data];
		case ACTION.DELETE:
			return todos.filter((todo) => {
				return todo.id !== action.payload.id;
			});
		case ACTION.TOGGLE:
			return todos.map((todo) => {
				return todo.id === action.payload.id
					? { ...todo, complete: !todo.complete }
					: todo;
			});
		default:
			return todos;
	}
};

const Home = () => {
	const [todos, dispatch] = useReducer(reducer, []);
	const inputRef = useRef();

	const [todoInput, setTodoInput] = useState("");
	const handleAdd = (e) => {
		e.preventDefault();
		if (todoInput.length >= 1) {
			dispatch({
				type: ACTION.ADD,
				payload: { todoInput: todoInput },
			});
		}
		return null;

		setTodoInput("");
	};
	return (
		<div>
			<form onSubmit={handleAdd}>
				<input
					type="text"
					placeholder="todo"
					ref={inputRef}
					value={todoInput}
					name="todo"
					onChange={(e) => setTodoInput(e.target.value)}
				/>
				<button type="submit">ADD</button>
			</form>
			<div>
				<ul>
					{todos.map((todo) => {
						return (
							<li key={todo.id} className="list-decimal mt-4">
								<div
									style={{
										textDecoration: todo.complete
											? "line-through"
											: "none",
									}}
								>
									{todo?.todo}
								</div>
								<button
									onClick={() =>
										dispatch({
											type: ACTION.DELETE,
											payload: { id: todo.id },
										})
									}
								>
									Delete
								</button>
								<button
									onClick={() => {
										dispatch({
											type: ACTION.TOGGLE,
											payload: { id: todo.id },
										});
									}}
								>
									Toggle
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Home;
