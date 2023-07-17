import React, { useState, useReducer } from "react";
import Todo from "./Todo";
export const ACTION = {
	ADD_TODO: "add-todo",
	TOGGLE_TODO: "toggle-todo",
	DELETE_TODO: "delete-todo",
};

const reducer = (todos, action) => {
	switch (action.type) {
		case ACTION.ADD_TODO:
			return [...todos, newTodo(action.payload.todo)];
		case ACTION.TOGGLE_TODO:
			return todos.map((todo) => {
				if (todo.id === action.payload.id) {
					return { ...todo, complete: !todo.complete };
				}
				return todo;
			});
		case ACTION.DELETE_TODO:
			return todos.filter((todo) => {
				return todo.id !== action.payload.id;
			});
	}
};
const newTodo = (todo) => {
	return { id: Date.now(), complete: false, todo: todo };
};

const Home = () => {
	const [todos, dispatch] = useReducer(reducer, []);
	const [inputs, setInputs] = useState({
		todo: "",
	});

	const handleInput = (e) => {
		const { name, value } = e.target;
		setInputs((preState) => {
			return { ...preState, [name]: value };
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: ACTION.ADD_TODO, payload: inputs });
		setInputs({ todo: "" });
	};
	return (
		<div className=" h-screen m-auto w-1/2 p-12">
			<div className="h-10 rounded-md mt-40 ">
				<form action="" className=" " onSubmit={handleSubmit}>
					<input
						type="text"
						name="todo"
						value={inputs.todo}
						className="border-2 rounded-md focus:bg-blue-500 focus:text-white  px-2 py-1 block focus focus:border-2"
						placeholder="todo"
						onChange={handleInput}
					/>
					<button className="border mr-10 mt-2 px-4 py-1 text-white rounded-md hover:bg-blue-700 bg-blue-600 ">
						Add
					</button>
				</form>
			</div>
			<div className="mt-40">
				<ol>
					{todos.map((todo) => {
						return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
					})}
				</ol>
			</div>
		</div>
	);
};

export default Home;
