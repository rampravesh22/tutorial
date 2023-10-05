import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
import axios from "axios";

const AddTodo = () => {
	const [input, setInput] = useState("");
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		const todo = { content: input, completed: false };
		const addData = async () => {
			const res = await axios.post("http://localhost:3000/todos", todo);
			console.log(res);
		};
		addData();
		dispatch(addTodo(todo));
		setInput("");
	};
	return (
		<div className="wrapper">
			<form action="" className="flex items-center" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Enter your todo"
					className="h-12 w-full  text-2xl box-border px-4 rounded-s-md focus:outline-none focus:ring-2"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					required
				/>
				<button
					type="submit"
					className="bg-blue-600 w-28 text-xl h-12 text-white rounded-e-md hover:bg-blue-700"
				>
					Add
				</button>
			</form>
		</div>
	);
};

export default AddTodo;
