import React from "react";
import { useSelector } from "react-redux";

const Todo = () => {
	const todos = useSelector((state) => state.todo.value);
	console.log(todos);
	return <div>Todo</div>;
};

export default Todo;
