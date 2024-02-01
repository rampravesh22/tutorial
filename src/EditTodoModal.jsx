import React, { useContext, useEffect, useState } from "react";
import supabase from "./supabaseClient";
import { GlobalContext } from "./ContextProvider";

const EditTodoModal = ({
	setEditTodoModal,
	editLoader,
	todoId,
	setEditLoader,
	setEditSuccess,
}) => {
	const { setTodos } = useContext(GlobalContext);
	const [todoData, setTodoData] = useState({});
	const [text, setText] = useState("");
	const [editLoading, setEditLoading] = useState(false);

	const handleUpdateSubmit = async (e, id) => {
		e.preventDefault();
		try {
			setEditLoading(true);
			const { data } = await supabase
				.from("todos")
				.update({ content: text })
				.eq("id", todoData.id)
				.select();
			setTodos((presState) =>
				presState.map((todo) => (todo.id === id ? data[0] : todo))
			);
			setEditLoading(false);
			setEditTodoModal(false);
			setEditSuccess(true);
			setTimeout(() => {
				setEditSuccess(false);
			}, 2000);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const getOneTodo = async () => {
			try {
				setEditLoader(true);
				const { data } = await supabase
					.from("todos")
					.select("*")
					.eq("id", todoId);
				setTodoData(data[0]);
				setText(data[0].content);
				setEditLoader(false);
				console.log(data);
			} catch (error) {
				console.log(error);
			}
		};
		getOneTodo();
	}, []);

	return (
		<>
			<div
				onClick={(e) =>
					setEditTodoModal(
						!(e.target === document.getElementById("editModalContainer"))
					)
				}
				id="editModalContainer"
				className="fixed inset-0  flex justify-center items-center"
			>
				<div className="h-44 w-[400px] shadow-md rounded-md border-pink-500 border flex flex-col p-3 bg-white text-black opacity-100">
					<h1 className="text-2xl text-center mb-4">Edit Todo</h1>

					<form
						action=""
						className="flex justify-center flex-col items-center "
						onSubmit={(e) => handleUpdateSubmit(e, todoData.id)}
						method="post"
					>
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
						<div className="mt-5 flex justify-evenly gap-10">
							<button
								type="button"
								onClick={(e) => {
									setEditTodoModal(false);
									e.stopPropagation();
								}}
								className="bg-blue-600 px-5 py-1 rounded-md text-white"
							>
								Close
							</button>
							{/* submit button loader */}
							<button
								type="submit"
								disabled={editLoading}
								className="bg-green-600 items-center gap-2 flex py-1 px-4 rounded-md text-white"
							>
								{editLoading && (
									<span className="w-4 h-4 border animate-spin rounded-full  border-e-black"></span>
								)}
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default EditTodoModal;
