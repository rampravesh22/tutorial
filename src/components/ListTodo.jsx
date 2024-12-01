import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteTodo,
	fetchAllTodo,
	updateTodo,
} from "../redux/actions/todoActions";
import { Loader2, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

const ListTodo = () => {
	const { todos } = useSelector((state) => state.todos);
	const dispatch = useDispatch();
	const [currentId, setCurrentId] = useState(null);
	const [loading, setLoading] = useState(false);
	const [disableDeleteBtn, setDisableDeleteBtn] = useState(false);
	const [fetchLoading, setFetchLoading] = useState(false);
	useEffect(() => {
		const fetchTodo = async () => {
			setFetchLoading(true);
			await dispatch(fetchAllTodo());
			setFetchLoading(false);
		};
		fetchTodo();
	}, []);

	const handleUpdateTodo = async (checked, id) => {
		try {
			setLoading(true);
			setCurrentId(id);
			await dispatch(updateTodo(checked, id));
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const handleDeleteTodo = async (id) => {
		const toastId = toast.loading("Deleting...");
		setDisableDeleteBtn(true);
		await dispatch(deleteTodo(id));
		setDisableDeleteBtn(false);
		toast.success("Deletion successful.", { id: toastId });
	};

	return (
		<div className="mt-6 flex  flex-col items-center">
			<div className="flex gap-2 flex-col w-[90%] max-w-[500px]">
				{todos.length ? (
					todos.map((todo) => {
						return (
							<div
								key={todo._id}
								className="border relative flex justify-between border-zinc-400 rounded h-10  items-center px-2"
							>
								<span className={`${todo.completed && "line-through"}`}>
									{todo.title}
								</span>

								<div className="flex items-center gap-2">
									<div className="flex items-center">
										{loading && currentId === todo._id ? (
											<span>
												<Loader2 className="animate-spin" />
											</span>
										) : (
											<input
												checked={todo.completed}
												onChange={(e) =>
													handleUpdateTodo(e.target.checked, todo._id)
												}
												type="checkbox"
												className="size-5 p-2 rounded-xl accent-slate-950"
											/>
										)}
									</div>
									<button
										disabled={disableDeleteBtn}
										onClick={() => handleDeleteTodo(todo._id)}
									>
										<Trash2 />
									</button>
								</div>
							</div>
						);
					})
				) : fetchLoading ? (
					<div className="text-center">Loading..</div>
				) : (
					<div className="text-center">No todos</div>
				)}
			</div>
		</div>
	);
};

export default ListTodo;
