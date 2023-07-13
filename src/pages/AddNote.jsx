import axios from "axios";
import React, { useState } from "react";

const AddNote = () => {
	const [inputs, setInputs] = useState({
		title: "",
		content: "",
	});
	const [success, setSuccess] = useState(false);

	const handleInput = (e) => {
		const { name, value } = e.target;
		setInputs((prev) => {
			return { ...prev, [name]: value };
		});
	};
	const handleSumbit = (e) => {
		e.preventDefault();
		const addNotes = async () => {
			try {
				const res = await axios.post(
					"http://127.0.0.1:8000/api/notes/",
					inputs
				);
				console.log(res);
				setSuccess(true);
				hideSuccessNotification();
			} catch (error) {
				console.log(error);
			}
		};
		addNotes();
		setInputs({
			title: "",
			content: "",
		});
	};

	return (
		<div className="m-auto p-2 flex flex-col justify-center items-center h-screen">
			<div className="child w-[60%] min-w-[300px] max-w-[500px]">
				<div className="bg-pink-600 font-bold text-lg text-white py-2 text-center uppercase">
					Add Note
				</div>
				<form
					action=""
					method="post"
					className="flex flex-col justify-center  shadow-lg p-2"
					onSubmit={handleSumbit}
				>
					<div className="input my-3 w-full">
						<input
							type="text"
							placeholder="Title"
							value={inputs.title}
							name="title"
							className="border px-2 py-1 rounded-md w-full"
							autoComplete="off"
							onChange={handleInput}
						/>
					</div>
					<textarea
						name="content"
						id="content"
						cols="30"
						value={inputs.content}
						placeholder="Content..."
						className="border px-2 py-1 rounded-md"
						rows="10"
						onChange={handleInput}
					></textarea>
					<button
						type="submit"
						className="uppercase self-end bg-pink-600 text-white mt-4 px-5 py-1 rounded-lg"
					>
						Add
					</button>
				</form>
			</div>
			{success ? (
				<div>
					<h1 className="uppercase bg-pink-600 mt-5 relative w-[60%] min-w-[300px] max-w-[500px] px-3 py-1 transition-transform duration-5 translate text-white rounded-md">
						Notes Added Successfully
						<span
							className="absolute right-3 cursor-pointer  font-extrabold text-black"
							onClick={() => {
								setSuccess(false);
							}}
						>
							x
						</span>
					</h1>
				</div>
			) : null}
		</div>
	);
};

export default AddNote;
