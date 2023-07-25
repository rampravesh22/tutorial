import React, { useContext, useState } from "react";
import { GlobalContext } from "./contextAPI";
import ACTIONS from "../reducer/actions";

const AddNotes = () => {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const { dispatch } = useContext(GlobalContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: ACTIONS.ADD_NOTE, payload: { title, desc } });
	};

	return (
		<div className="h-10 pt-5">
			<form
				action=""
				className="flex w-2/3 justify-center m-auto"
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					name="title"
					value={title}
					placeholder="Title"
					onChange={(e) => setTitle(e.target.value)}
					className="px-3 py-2 rounded-md text-lg border-2 mr-3 focus:outline-blue-700"
				/>
				<input
					type="text"
					name="desc"
					value={desc}
					onChange={(e) => setDesc(e.target.value)}
					placeholder="Desc"
					className="px-3 py-2 rounded-md text-lg border-2 focus:outline-blue-700"
				/>
				<button
					type="submit"
					className="uppercase px-8 text-md font-bold text-white py-2 bg-blue-700 rounded-md ml-3"
				>
					Add
				</button>
			</form>
		</div>
	);
};

export default AddNotes;
