import { CgClose } from "react-icons/cg";
import React, { useState } from "react";
const createTodo = (text) => {
	return { id: new Date(), title: text };
};
const AddTodo = ({ show, setShow, todos, setTodos }) => {
	const [inputText, setInputText] = useState("");
	const handleAddTodo = (e) => {
		e.preventDefault();
		setTodos((preState) => [...preState, createTodo(inputText)]);
	};
	return (
		<div
			onClick={(e) => {
				e.stopPropagation();
				if (e.target === document.getElementById("modalContainer")) {
					setShow(false);
				}
			}}
			id="modalContainer"
			className={`fixed inset-0 ${
				show ? "scale-100" : "scale-0"
			} bg-zinc-950/60 flex justify-center `}
		>
			<form
				onSubmit={handleAddTodo}
				className={`absolute top-40 flex gap-2 flex-col bg-white p-3 w-[90%] max-w-[500px] h-60 rounded transition-all ${
					show ? "scale-100" : "scale-[1.01]"
				}`}
			>
				<button
					type="button"
					onClick={() => setShow(false)}
					className="absolute border focus:ring-1 focus:ring-zinc-800 rounded-md right-2 top-2"
				>
					<CgClose />
				</button>
				<h2 className="bg-zinc-900 uppercase mt-6 text-white text-center py-2">
					Add Todo here
				</h2>
				<input
					type="text"
					autoFocus={true}
					value={inputText}
					onChange={(e) => setInputText(e.target.value)}
					className="w-full border mt-6 transition-all border-zinc-700 h-10 text-2xl focus:ring-2 focus:ring-zinc-900 outline-none px-2 rounded"
				/>
				<button
					type="submit"
					className="text-white rounded hover:bg-zinc-800 bg-zinc-900 self-end px-6 py-2"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default AddTodo;
