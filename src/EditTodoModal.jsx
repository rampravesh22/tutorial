import React, { useContext, useEffect, useState } from "react";
import supabase from "./supabaseClient";
import { GlobalContext } from "./ContextProvider";

const EditTodoModal = ({
	setEditTodoModal,
	editLoader,
	todoId,
	todoData,
	setEditSuccess,
}) => {
	const { setTodos } = useContext(GlobalContext);
	console.log(todoData);
	const [text, setText] = useState(todoData.content);
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
			setEditTodoModal(false);
			setTodos((preState) =>
				preState.filter((todo) => {
					return todo.id !== data[0].id;
				})
			);
			setEditSuccess(true);
			setTimeout(() => {
				setEditSuccess(false);
			}, 2000);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div
				onClick={(e) =>
					setEditTodoModal(
						!(
							e.target ===
							document.getElementById("deleteModalContainer")
						)
					)
				}
				id="deleteModalContainer"
				className="fixed inset-0  flex justify-center items-center"
			>
				<div className="h-44 w-[400px] shadow-md rounded-md border-pink-500 border flex flex-col p-3 bg-white text-black opacity-100">
					<h1 className="text-2xl text-center mb-4">Edit Todo</h1>

					<form action="" className="flex justify-center ">
						{!editLoader ? (
							<input
								type="text"
								className="border w-[80%] border-gray-400 rounded-md h-10 px-2"
								placeholder="Edit Todo Here"
								value={text}
								onChange={(e) => setText(e.target.value)}
							/>
						) : (
							<span className="w-10  h-10 animate-spin  rounded-full border border-e-black border-e-2"></span>
						)}
					</form>

					<div className="mt-5 flex justify-evenly">
						<button
							onClick={(e) => {
								setEditTodoModal(false);
								e.stopPropagation();
							}}
							className="bg-blue-600 px-5 py-1 rounded-md text-white"
						>
							Close
						</button>
						<button
							onClick={handleDeleteTodo}
							className="bg-green-600 px-5 py-1 rounded-md text-white"
						>
							Submit
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default EditTodoModal;
