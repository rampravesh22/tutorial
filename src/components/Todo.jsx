import React from "react";
import { useSelector } from "react-redux";

const Todo = () => {
	const todos = useSelector((state) => state.todo.value);
	console.log(todos);
	return (
		<div className="todo-wrapper">
			<ul>
				{todos.map((todo)=>)}
			</ul>
		</div>
	);
};

export default Todo;
