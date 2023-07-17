import React from "react";
import { ACTION } from "./Home";
const Todo = ({ todo, dispatch }) => {
	return (
		<li className="mt-5  border-2 border-red-500 py-2 px-4 flex justify-between">
			<span className={`mr-4 ${todo.complete ? "line-through" : ""}`}>
				{todo.todo}
			</span>
			<div>
				<button
					onClick={() =>
						dispatch({
							type: ACTION.TOGGLE_TODO,
							payload: { id: todo.id },
						})
					}
					className="border-2 border-black mr-2 px-4 py-1 rounded-md"
				>
					Toggle
				</button>
				<button
					className="border-2 border-black mr-2 px-4 py-1 rounded-md"
					onClick={() => {
						dispatch({
							type: ACTION.DELETE_TODO,
							payload: { id: todo.id },
						});
					}}
				>
					Delete
				</button>
			</div>
		</li>
	);
};

export default Todo;
