import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Note = ({ note, propDeleteNote }) => {
	const aDate = new Date(note.addedDate);
	const [scale, setScale] = useState(false);
	const [msg, setMsg] = useState("original msg");
	const handleDelete = (id) => {
		const deleteNote = async (id) => {
			try {
				const res = await axios.delete(
					`http://localhost:8000/api/notes/${id}/`
				);
				console.log(res.data);
				setMsg(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		deleteNote(id);
		propDeleteNote({ id, msg });
	};
	return (
		<div
			className={`group hover:scale-[.97] transition-all duration-200  relative space-x-2 shadow-lg rounded-lg hover  border-3 border-t-pink-600 border p-5 pb-24 h-[15rem] w-[20rem] text-ellipsis overflow-hidden flex-wrap ${
				scale ? "animate-spin" : ""
			}`}
		>
			<h1 className="font-bold pl-2 capitalize text-pink-600">
				{note.title}
			</h1>
			<hr />

			<p className="p-1 line-clamp-5">{note.content}</p>
			<span className="absolute right-2 font-light text-xs bottom-2">
				{aDate.toLocaleDateString()}
			</span>
			<NavLink to={`notedetail/${note.id}`}>
				<span className="absolute left-7 bottom-2 border px-4 py-1 rounded hover:bg-pink-600 hover:text-white transition-all text-sm duration-150">
					More
				</span>
			</NavLink>
			<button
				className="hidden absolute right-2 top-2 group-hover:block transition"
				onClick={() => {
					setScale(true);
					handleDelete(note.id);
				}}
			>
				<i className="fa-solid fa-trash text-red-600"></i>
			</button>
		</div>
	);
};

export default Note;
