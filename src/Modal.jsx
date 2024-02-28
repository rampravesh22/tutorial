import { useEffect, useState } from "react";

const Modal = () => {
	const [toggleModal, setToggleModal] = useState(false);
	useEffect(() => {
		document.body.style.overflow = toggleModal ? "hidden" : "auto";
	}, [toggleModal]);
	return (
		<div>
			{/* modal open button */}
			<div className="flex justify-center items-center mt-4">
				<button
					onClick={() => setToggleModal(true)}
					className="bg-blue-600 text-white px-6 py-1 rounded m-auto"
				>
					Open
				</button>
			</div>
			{/* modal container */}
			<div
				onClick={(e) => {
					if (e.target === document.getElementById("editModalContainer")) {
						setToggleModal(false);
					}
				}}
				className={`fixed inset-0 bg-[rgb(0,0,0,.5)] ${
					toggleModal ? "scale-100" : "scale-0"
				} flex justify-center items-center`}
			>
				{/* modal body */}
				<div
					className={`h-64 w-[400px] ${
						toggleModal ? "scale-100" : "scale-90"
					} shadow-md transition-transform rounded-md justify-between border-pink-500 border flex flex-col p-3 bg-white text-black opacity-100`}
				>
					<h1 className="text-2xl text-center mb-4">Modal Body</h1>
					<div className="space-x-3 text-end">
						{/* close button */}
						<button
							onClick={(e) => {
								console.log("close button");
								e.stopPropagation();
								setToggleModal(false);
							}}
							className="self-center bg-blue-600 text-white px-5 py-1 rounded-md"
						>
							Close
						</button>
						<button className="self-center bg-green-600 text-white px-5 py-1 rounded-md">
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
