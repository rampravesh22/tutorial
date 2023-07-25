import React, { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { BiShowAlt } from "react-icons/bi";
import { GlobalContext } from "./contextAPI";
import ACTIONS from "../reducer/actions";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { FiEdit } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import UpdateNotes from "./UpdateNotes";
const Note = ({ note, ind }) => {
	const { notes, dispatch } = useContext(GlobalContext);
	const [modal, setModal] = useState(false);
	const [singelNote, setSingleNote] = useState({});
	const [formModal, setFormModal] = useState(false);
	const showNote = (id) => {
		setModal(true);
		const res = notes.find((note) => note.id == id);

		setSingleNote(res);
	};

	return (
		<li className="flex justify-between gap-3 border-2 mb-3 p-2">
			<div className="w-[60%]overflow-clip">
				<span className="text-emerald-700 font-bold mr-3">{ind}. </span>
				<span className={`${note.complete ? "line-through" : ""}`}>
					{note.title}
				</span>
			</div>
			<div className="w-[40%] flex justify-end">
				<button
					onClick={() => {
						showNote(note.id);
					}}
					className="text-green-700 rounded-md px-4 py-1 "
					type="button"
				>
					<BiShowAlt className="text-3xl hover:text-green-800 " />
				</button>
				<button
					onClick={() => {
						setFormModal(true);
					}}
					className="text-black-700 rounded-md px-4 py-1 "
					type="button"
				>
					<FiEdit className="text-3xl hover:text-green-800 " />
				</button>
				<button
					type="button"
					className="text-red-700 rounded-md px-4 py-1 hover:text-red-800"
					onClick={() =>
						dispatch({
							type: ACTIONS.DELETE_NOTE,
							payload: { id: note.id },
						})
					}
				>
					<MdDelete className="text-3xl" />
				</button>
				<button
					type="button"
					className="ml-1 rounded-md text-white px-4 py-1 transition-all duration-300"
					onClick={() => {
						dispatch({
							type: ACTIONS.TOGGLE_COMPLETE,
							payload: { id: note.id },
						});
					}}
				>
					{!note.complete ? (
						<BsToggleOff className="text-blue-500 text-3xl" />
					) : (
						<BsToggleOn className="text-blue-500 text-3xl" />
					)}
				</button>
			</div>
			{/* modal */}
			{formModal ? (
				<UpdateNotes note={note} setFormModal={setFormModal} />
			) : null}
			{modal ? (
				<div
					className="fixed inset-0 cursor-auto  backdrop-blur-lg  z-10  bg-black flex justify-center items-center"
					id="outside-modal"
					onClick={(e) =>
						e.target === document.getElementById("outside-modal")
							? setModal(false)
							: null
					}
				>
					<div className="relative w-1/2 h-1/2 after:content-[dfafjfskdjfdsjk]">
						<div className="bg-white p-4  rounded-md  overflow-scroll z-50 absolute inset-0">
							<h2 className="text-3xl ">{singelNote.title}</h2>
							<hr className="mb-3 mt-2 bg-red-600  h-1" />
							<ReactMarkdown className="mt-3">
								{singelNote.desc}
							</ReactMarkdown>
						</div>
						<button
							className="-right-16  absolute -top-12 text-3xl"
							onClick={() => {
								setModal(false);
							}}
						>
							close
							<IoMdClose className="text-white hover:text-blue-200 text-3xl absolute top-4" />
						</button>
					</div>
				</div>
			) : null}
		</li>
	);
};

export default Note;
