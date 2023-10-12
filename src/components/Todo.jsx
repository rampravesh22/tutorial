import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deleteTodo } from "../features/todoSlice";
import DeleteModal from "./DeleteModal";
import axios from "axios";
const Todo = () => {
	const todos = useSelector((state) => state.todo.value);
	const [modal, setModal] = useState(false);
	const [loading, setLoading] = useState(false);

	const dispatch = useDispatch();
	const [todoToDelete, setTodoToDelete] = useState(null); // Store the ID of the todo to delete
	const handleDeleteTodo = (todoId) => {
		setLoading(true);
		const deleteApi = async (todoId) => {
			try {
				const res = await axios.delete(
					`http://localhost:3000/todos/${todoId}`
				);
			} catch (error) {
				console.log(error);
			}
		};

		setTimeout(() => {
			deleteApi(todoId);
			dispatch(deleteTodo(todoId));
			setModal(false);
			setTodoToDelete(null);
			setLoading(false);
		}, 2000);
	};

	const handleDelete = (e, id) => {
		setTodoToDelete(id);
	};

	return (
		<div className="todo-wrapper relative">
			{todos ? (
				<ul className="flex flex-col gap-2">
					{todos.map((todo, index) => {
						return (
							<li
								key={index}
								className="bg-white px-3 group flex justify-between items-center py-2 rounded-md"
							>
								{todo.content}
								<button onClick={(e) => handleDelete(e, todo.id)}>
									<MdDelete className="text-xl text-red-600 hidden group-hover:block" />
								</button>
							</li>
						);
					})}
				</ul>
			) : (
				<div>No todos available</div>
			)}
			{todoToDelete ? (
				<DeleteModal
					modal={modal}
					setTodoToDelete={setTodoToDelete}
					id={todoToDelete}
					handleDelete={handleDeleteTodo}
					loading={loading}
					setLoading={setLoading}
				/>
			) : null}
		</div>
	);
};

export default Todo;
