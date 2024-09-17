import React, { useContext, useState } from "react";
import { TodoGlobalContext } from "../../context/TodoConext";

const AddTodo = () => {
	const { setTodos } = useContext(TodoGlobalContext);
	return (
		<div className="">
			<form action="" className="w-[90%] relative mx-auto mt-8 h-10">
				<input
					type="text"
					className="border outline-none px-4 text-xl w-full rounded-full border-slate-400 h-full  "
				/>
				<button className="absolute right-0 bg-zinc-900 h-full px-6 text-white rounded-full">
					Add
				</button>
			</form>
		</div>
	);
};

export default AddTodo;
