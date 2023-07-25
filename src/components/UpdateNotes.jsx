import React, { useContext, useState } from "react";
import { GlobalContext } from "./contextAPI";
import ACTIONS from "../reducer/actions";
import { IoMdClose } from "react-icons/io";

const UpdateNotes = ({ note, setFormModal }) => {
	const { dispatch } = useContext(GlobalContext);
	const [utitle, setUTitle] = useState(note.title);
	const [udesc, setUDesc] = useState(note.desc);
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: ACTIONS.UPDATE_NOTE,
			payload: {
				id: note.id,
				title: utitle,
				desc: udesc,
			},
		});
		setFormModal(false);
	};

	return (
		<div
			className="fixed inset-0 flex justify-center items-center backdrop-blur-lg"
			onClick={(e) =>
				e.target === document.getElementById("outer")
					? setFormModal(false)
					: null
			}
			id="outer"
		>
			<div className="bg-white z-10 h-1/2 w-1/2 shadow-md rounded-md flex justify-center items-center relative">
				<form
					action=""
					className="flex w-[60%] md:justify-center flex-col items-stretch m-auto flex-wrap gap-3 justify-start md:flex-nowrap"
					onSubmit={handleSubmit}
				>
					<input
						type="text"
						name="title"
						value={utitle}
						placeholder="Title"
						onChange={(e) => setUTitle(e.target.value)}
						className="px-3 py-2 rounded-md text-lg h-10 border-2  focus:outline-blue-700"
					/>
					<textarea
						type="text"
						name="desc"
						value={udesc}
						onChange={(e) => setUDesc(e.target.value)}
						placeholder="Description"
						className="px-3 py-2 rounded-md text-lg border-2 focus:outline-blue-700"
					></textarea>
					<button
						type="submit"
						className="uppercase self-start h-10 px-8 text-md font-bold text-white py-2 bg-blue-700 rounded-md  "
					>
						UPDATE
					</button>
				</form>
				<button onClick={() => setFormModal(false)}>
					<IoMdClose className="text-black text-3xl absolute -top-8 -right-6" />
				</button>
			</div>
		</div>
	);
};

export default UpdateNotes;
