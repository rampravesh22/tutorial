import { BiEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
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
	const [deleteSuccess, setDeleteSuccess] = useState(false);

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
		setEditLoader(true);
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
				<ul className="sm:w-1/2 w-[97%] transition-all duration-200">
					{todos.map((todo, index) => {
						return (
							<li
								key={index}
								className="border text-xl group relative flex items-center justify-between shadow-md mt-4 py-2 px-2"
							>
								<span className="capitalize">{todo.content}</span>

								<div className="space-x-2 absolute right-1 shadow-md flex justify-center items-center rounded-md p-1 border scale-0 transition-transform group-hover:scale-100 bg-white">
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
			<DeleteTodoModal
				setDeleteTodoModal={setDeleteTodoModal}
				todoId={todoId}
				setDeleteSuccess={setDeleteSuccess}
				deleteTodoModal={deleteTodoModal}
			/>
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
