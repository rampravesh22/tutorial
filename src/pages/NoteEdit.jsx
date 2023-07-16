import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const NoteEdit = () => {
	const { id } = useParams();
	const [success, setSuccess] = useState(false);
	const [inputs, setInputs] = useState({
		title: "",
		content: "",
	});

	useEffect(() => {
		const getData = async (id) => {
			try {
				const res = await axios.get(
					`http://localhost:8000/api/notes/${id}/`
				);
				setInputs(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		getData(id);
	}, []);

	const handleInput = (e) => {
		const { name, value } = e.target;
		setInputs((preValue) => {
			return { ...preValue, [name]: value };
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const updateNote = async (id) => {
			try {
				const res = await axios.put(
					`http://localhost:8000/api/notes/${id}/`,
					inputs
				);
				setSuccess(true);
			} catch (error) {
				console.log(error);
			}
		};
		updateNote(id);
	};

	return (
		<div className="m-auto p-2 flex flex-col justify-center items-center h-screen">
			<div className="child w-[60%] min-w-[300px] max-w-[500px]">
				<div className="bg-pink-600 font-bold text-lg text-white py-2 text-center uppercase">
					Update Note
				</div>
				<form
					action=""
					method="post"
					className="flex flex-col justify-center  shadow-lg p-2"
					onSubmit={handleSubmit}
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
						className="uppercase self-end hover:bg-pink-700 bg-pink-600 text-white mt-4 px-5 py-1 rounded-md"
					>
						UPDATE
					</button>
				</form>
			</div>
			{success ? (
				<div>
					<h1 className="uppercase bg-pink-600 mt-5 relative w-[60%] min-w-[300px] max-w-[500px] px-3 py-1 transition-transform duration-5 translate text-white rounded-md">
						Notes Updated Successfully
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

export default NoteEdit;
