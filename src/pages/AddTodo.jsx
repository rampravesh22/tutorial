import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todoActions";

const AddTodo = () => {
	const [title, setTitle] = useState("");
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const handleAddTodo = async (e) => {
		e.preventDefault();
		await dispatch(addTodo(title));
		setTitle("");
	};
	return (
		<div className="flex justify-center">
			<form
				onSubmit={handleAddTodo}
				action=""
				className="flex mt-3 gap-2 w-[90%] max-w-[500px]"
			>
				<input
					type="text"
					onChange={(e) => setTitle(e.target.value)}
					value={title}
					className="border px-2 border-zinc-400 h-10 rounded w-full"
				/>
				<button
					disabled={loading}
					type="submit"
					className="bg-gray-800 text-white px-4 h-10 py rounded"
				>
					Add
				</button>
			</form>
		</div>
	);
};

export default AddTodo;
