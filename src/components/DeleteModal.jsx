import React, { useRef } from "react";

const DeleteModal = ({ setTodoToDelete, loading, id, handleDelete }) => {
	const modalRef = useRef();
	const handleConfirmDelete = (todoId) => {
		handleDelete(todoId); // Call the handleDelete function to delete the todo
	};
	const handleCloseModalOutsideClick = (e) => {
		if (e.target === modalRef.current) {
			setTodoToDelete(null);
		}
	};
	return (
		<div
			className="modal absolute  inset-0  "
			ref={modalRef}
			onClick={handleCloseModalOutsideClick}
		>
			<div className="modal-body flex items-center w-[60%] m-auto flex-col h-[90px] mt-12 justify-center  shadow-md rounded-md p-2 backdrop-blur-3xl ">
				{!loading ? (
					<div className="flex justify-center flex-col items-center">
						<div className="self-center space-x-2">
							<button
								type="button"
								onClick={() => handleConfirmDelete(id)}
								className="px-4 py-1 bg-green-500 text-white rounded-md"
							>
								Yes
							</button>
							<button
								type="button"
								onClick={() => setTodoToDelete(null)}
								className="px-4 py-1 bg-red-500 text-white rounded-md"
							>
								No
							</button>
						</div>
						<span>Are you sure you want to delete?</span>
					</div>
				) : (
					<div>Deleting...</div>
				)}
			</div>
		</div>
	);
};

export default DeleteModal;
