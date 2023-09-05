import React, { useContext, useState } from "react";
import GlobalContext from "../contenxt/context";
import { getStorage, setStorage } from "../localstorage/storage";

const Note = ({ note }) => {
	const [modal, setModal] = useState(false);
	const { setNotes, setDeleteNote } = useContext(GlobalContext);
	const deleteNote = (id) => {
		const localNotes = getStorage("notes");
		const filteredNote = localNotes.filter((note) => {
			return note.id !== id;
		});
		setStorage(filteredNote);
		setNotes((preState) => {
			return preState.filter((note) => note.id !== id);
		});
		setDeleteNote(true);
		setTimeout(() => {
			setDeleteNote(false);
		}, 2000);
	};
	const handleModal = (id) => {
		if (id == note.id) {
			setModal(true);
		} else setModal(false);
	};
	return (
		<div className="shadow-md overflow-hidden group rounded-md hover:shadow-green-500 hover:scale-110 transition-all h-[100px] flex-col justify-between relative items-center p-2">
			{note.data}
			<div className="btns">
				<button
					onClick={() => {
						handleModal(note.id);
					}}
					className="delete-btn btn bg-red-600 text-xs group-hover:bot absolute left-[50%] translate-x-[-50%] translate-y-[100%] bottom-0 transition group-hover:translate-y-[-12%]"
				>
					Delete
				</button>
			</div>
			{modal ? (
				<div className="modal absolute inset-0 backdrop-blur-lg flex gap-2 justify-center items-center">
					<button
						type="button"
						className="btn bg-green-600 text-xs"
						onClick={() => deleteNote(note.id)}
					>
						Yes
					</button>
					<button
						type="button"
						onClick={() => setModal(false)}
						className="btn bg-neutral-400 text-xs"
					>
						No
					</button>
				</div>
			) : null}
		</div>
	);
};

export default Note;
