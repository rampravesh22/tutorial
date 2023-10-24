import React, { useRef, useState } from "react";

const Home = () => {
	const [modal, setModal] = useState(false);
	const modalRef = useRef();

	const handleModal = (e) => {
		if (e.target === modalRef.current) {
			setModal(false);
		}
	};

	return (
		<div className="h-screen relative">
			<div className="grid place-content-center h-screen">
				<button
					className="bg-blue-600 text-white px-8 rounded-md py-3 uppercase hover:bg-blue-700"
					onClick={() => {
						setModal(true);
					}}
				>
					Open
				</button>
			</div>
			{!modal ? null : (
				<div
					className="w-full absolute  bg-red-500 h-screen left-0 top-0  grid place-items-center"
					ref={modalRef}
					onClick={handleModal}
				>
					<div className="w-1/2 h-1/2 bg-white border-2 relative rounded-md hover:shadow-lg transition-all max-w-[600px] min-w-[400px]">
						<form
							action=""
							className=" h-full flex justify-center items-center"
						>
							<div className="flex flex-col justify-stretch items-stretch w-1/2">
								<input
									type="text"
									placeholder="Name"
									className="border-2 w-full mt-3 px-3 py-1 rounded-md"
								/>
								<input
									type="text"
									placeholder="Age"
									className="border-2 w-full mt-3 px-3 py-1 rounded-md"
								/>
								<input
									type="text"
									placeholder="Roll Number"
									className="border-2 w-full mt-3 px-3 py-1 rounded-md"
								/>
								<span></span>
								<button
									className="bg-cyan-600 text-white hover:bg-cyan-700 self-start px-5 py-1 mt-2 rounded-md"
									onClick={(e) => {
										e.preventDefault();
									}}
								>
									Submit
								</button>
							</div>
						</form>
						<button
							className="absolute right-3 top-1 text-3xl"
							onClick={() => {
								setModal(false);
							}}
						>
							x
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Home;
