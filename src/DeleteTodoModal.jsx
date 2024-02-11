import React, { useContext, useState } from "react";
import supabase from "./supabaseClient";
import { GlobalContext } from "./ContextProvider";

const DeleteTodoModal = ({
	setDeleteTodoModal,
	deleteTodoModal,
	todoId,
	setDeleteSuccess,
}) => {
	const { setTodos } = useContext(GlobalContext);
	const [loading, setLoading] = useState(false);
	const handleDeleteTodo = async (e) => {
		e.stopPropagation();
		try {
			setLoading(true);
			const { data } = await supabase
				.from("todos")
				.delete()
				.eq("id", todoId)
				.select();
			setDeleteTodoModal(false);
			setTodos((preState) =>
				preState.filter((todo) => {
					return todo.id !== data[0].id;
				})
			);
			setLoading(false);
			setDeleteSuccess(true);
			setTimeout(() => {
				setDeleteSuccess(false);
			}, 2000);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<div
				onClick={(e) =>
					setDeleteTodoModal(
						!(
							e.target ===
							document.getElementById("deleteModalContainer")
						)
					)
				}
				id="deleteModalContainer"
				className={`fixed inset-0 ${
					deleteTodoModal ? "scale-100" : "scale-0"
				} flex justify-center items-center`}
			>
				<div
					className={`h-32 w-[300px] ${
						deleteTodoModal ? "scale-100" : "scale-90"
					} shadow-md transition-transform rounded-md border-pink-500 border flex flex-col p-3 bg-white text-black opacity-100`}
				>
					<h1 className="text-2xl text-center">Confirm Delete</h1>
					<div className="mt-5 flex justify-evenly">
						<button
							onClick={(e) => {
								setDeleteTodoModal(false);
								e.stopPropagation();
							}}
							className="bg-blue-600 px-5 py-1 rounded-md text-white"
						>
							Close
						</button>
						<button
							onClick={handleDeleteTodo}
							disabled={loading}
							className="bg-red-600 flex gap-2 px-5 items-center py-1 rounded-md text-white"
						>
							{loading && (
								<span className="w-4  h-4 animate-spin  rounded-full border border-e-black"></span>
							)}
							Delete
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default DeleteTodoModal;
