import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTodo } from "../redux/actions/todoActions";

const ListTodo = () => {
	const { todos } = useSelector((state) => state.todos);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllTodo());
	}, []);
	return (
		<div className="mt-6 flex  flex-col items-center">
			<div className="flex gap-2 flex-col w-[90%] max-w-[500px]">
				{todos.length ? (
					todos.map((todo) => {
						return (
							<div
								key={todo._id}
								className="border relative border-zinc-400 rounded h-10 flex items-center px-2"
							>
								{todo.title}
								<span
									className={`absolute right-2 ${
										todo.completed && "line-through"
									} bg-green-500 px-2 text-xs py-1 rounded-full text-white`}
								>
									{todo.completed ? "Completed" : "No completed"}
								</span>
								<input type="checkbox" />
							</div>
						);
					})
				) : (
					<div className="text-center">Loading..</div>
				)}
			</div>
		</div>
	);
};

export default ListTodo;
