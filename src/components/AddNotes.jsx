import React, { useContext, useState } from "react";
import { GlobalContext } from "./contextAPI";
import ACTIONS from "../reducer/actions";

const AddNotes = () => {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const { dispatch } = useContext(GlobalContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (title.length < 1 || desc.length < 1) {
			return null;
		}
		dispatch({ type: ACTIONS.ADD_NOTE, payload: { title, desc } });
		setDesc("");
		setTitle("");
	};

	return (
		<div className="min-h-10 pt-5">
			<form
				action=""
				className="flex w-[60%] md:justify-center flex-col items-stretch m-auto flex-wrap gap-3 justify-start md:flex-nowrap"
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					name="title"
					value={title}
					placeholder="Title"
					onChange={(e) => setTitle(e.target.value)}
					className="px-3 py-2 rounded-md text-lg h-10 border-2  focus:outline-blue-700"
				/>
				<textarea
					type="text"
					name="desc"
					value={desc}
					onChange={(e) => setDesc(e.target.value)}
					placeholder="Desc"
					className="px-3 py-2 rounded-md text-lg border-2 focus:outline-blue-700"
				></textarea>
				<button
					type="submit"
					className="uppercase self-start h-10 px-8 text-md font-bold text-white py-2 bg-blue-700 rounded-md  "
				>
					Add
				</button>
			</form>
		</div>
	);
};

export default AddNotes;
