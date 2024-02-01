import { BiEdit } from "react-icons/bi";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./ContextProvider";
import Loader from "./Loader";
import DeleteTodoModal from "./DeleteTodoModal";
import EditTodoModal from "./EditTodoModal";
import SuccessMessage from "./SuccessMessage";

const ShowTodo = () => {
	const { todos, loading } = useContext(GlobalContext);
	const [deleteTodoModal, setDeleteTodoModal] = useState(false);
	const [editSuccess, setEditSuccess] = useState(false);
	const [editLoader, setEditLoader] = useState(false);
	const [editTodoModal, setEditTodoModal] = useState(false);
	const [todoId, setTodoId] = useState("");
	const [deleteSuccess, setDelelteSuccess] = useState(false);

	const handleDeleteModal = (id) => {
		setDeleteTodoModal(true);
		setTodoId(id);
	};

	useEffect(() => {
		document.body.style.overflow =
			deleteTodoModal || editTodoModal ? "hidden" : "auto";
	}, [deleteTodoModal, editTodoModal]);

	const handleEditModal = async (id) => {
		setEditTodoModal(true);
		setTodoId(id);
	};
	return (
		<div className="flex-grow flex flex-col items-center mt-5  ">
			<SuccessMessage check={deleteSuccess}>
				Todo Delete Successful
			</SuccessMessage>
			<SuccessMessage check={editSuccess}>
				Todo Edit Successful
			</SuccessMessage>

			{!loading && todos ? (
				<ul className="w-1/2">
					{todos.map((todo, index) => {
						return (
							<li
								key={index}
								className="border text-xl group relative flex items-center justify-between shadow-md mt-4 py-2 px-2"
							>
								<span className="capitalize">{todo.content}</span>

								<div className="space-x-2 absolute right-1 hidden group-hover:block bg-white">
									<button onClick={() => handleEditModal(todo.id)}>
										<BiEdit className="text-2xl text-blue-600 hover:text-black" />
									</button>
									<button onClick={() => handleDeleteModal(todo.id)}>
										<MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
									</button>
								</div>
							</li>
						);
					})}
				</ul>
			) : (
				<Loader />
			)}
			{deleteTodoModal ? (
				<DeleteTodoModal
					setDeleteTodoModal={setDeleteTodoModal}
					todoId={todoId}
					setDelelteSuccess={setDelelteSuccess}
				/>
			) : null}
			{editTodoModal && (
				<EditTodoModal
					todoId={todoId}
					setEditTodoModal={setEditTodoModal}
					editLoader={editLoader}
					setEditLoader={setEditLoader}
					setEditSuccess={setEditSuccess}
				/>
			)}
		</div>
	);
};

export default ShowTodo;
