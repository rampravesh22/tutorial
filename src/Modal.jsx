import { useState } from "react";

const Modal = () => {
	const [toggleModal, setToggleModal] = useState(false);
	return (
		<div>
			<div className="flex justify-center items-center mt-4">
				<button
					onClick={() => setToggleModal(true)}
					className="bg-blue-600 text-white px-6 py-1 rounded m-auto"
				>
					Open
				</button>
			</div>
			<div
				onClick={(e) =>
					setToggleModal(
						!(e.target === document.getElementById("editModalContainer"))
					)
				}
				id="editModalContainer"
				className="fixed inset-0  flex justify-center items-center"
			>
				<div className="h-44 w-[400px] shadow-md rounded-md border-pink-500 border flex flex-col p-3 bg-white text-black opacity-100">
					<h1 className="text-2xl text-center mb-4">Edit Todo</h1>
				</div>
			</div>
		</div>
	);
};

export default Modal;
