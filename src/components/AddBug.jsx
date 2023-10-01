import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBug } from "../redux/bugs/actions";

const AddBug = () => {
	const [input, setInput] = useState("");
	const dispatch = useDispatch();
	const bugs = useSelector((state) => state.bugReducer.bugs);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addBug(input));
		setInput("");
	};

	return (
		<div className="add-bug flex justify-center h-12">
			<form
				action=""
				className="w-full flex justify-center items-center"
				onSubmit={handleSubmit}
			>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					type="text"
					placeholder="Enter your issue"
					required
					className="w-[70%] box-border transition-all h-full border  focus:border focus:border-blue-700 focus:outline-none px-2 text-xl rounded-s-md"
				/>
				<button
					type="submit"
					className="w-[20%] bg-blue-600 h-full box-border text-white rounded-e-md"
				>
					Add
				</button>
			</form>
		</div>
	);
};

export default AddBug;
