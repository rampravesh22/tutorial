import React, { useContext } from "react";
import supabase from "./supabaseClient";
import { GlobalContext } from "./ContextProvider";

const DeleteTodoModal = ({ setDeleteTodoModal, todoId, setDelelteSuccess }) => {
	const { setTodos } = useContext(GlobalContext);
	const handleDeleteTodo = async (e) => {
		e.stopPropagation();
		console.log(todoId);
		try {
			const { data } = await supabase
				.from("todos")
				.delete()
				.eq("id", todoId)
				.select();
			console.log(data);
			setDeleteTodoModal(false);
			setTodos((preState) =>
				preState.filter((todo) => {
					return todo.id !== data[0].id;
				})
			);
			setDelelteSuccess(true);
			setTimeout(() => {
				setDelelteSuccess(false);
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
				className="fixed inset-0  flex justify-center items-center"
			>
				<div className="h-32 w-[300px] shadow-md rounded-md border-pink-500 border flex flex-col p-3 bg-white text-black opacity-100">
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
							className="bg-red-600 px-5 py-1 rounded-md text-white"
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default DeleteTodoModal;
