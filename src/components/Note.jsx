import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Note = ({ note, propDeleteNote }) => {
	const aDate = new Date(note.addedDate);
	const handleDelete = (id) => {
		const deleteNote = async (id) => {
			try {
				const res = await axios.delete(
					`http://localhost:8000/api/notes/${id}/`
				);
			} catch (error) {
				console.log(error);
			}
		};
		deleteNote(id);
		propDeleteNote({ id, data: true });
	};

	return (
		<div
			className={`group hover:scale-[.97] transition-all duration-200  relative space-x-2 shadow-lg rounded-lg hover  border-3 border-t-pink-600 border p-5 pb-24 h-[15rem] w-[20rem] text-ellipsis overflow-hidden flex-wrap `}
		>
			<h1 className="font-bold pl-2 capitalize text-pink-600">
				{note.title}
			</h1>
			<hr />

			<p className="p-1 line-clamp-5 break-words">{note.content}</p>
			<span className="absolute right-2 font-light text-xs bottom-2">
				{aDate.toLocaleDateString()}
			</span>
			<NavLink to={`notedetail/${note.id}`}>
				<span className="absolute left-7 bottom-2 border px-4 py-1 rounded bg-pink-600 text-white transition-all text-sm duration-150 hover:bg-pink-700">
					More
				</span>
			</NavLink>
			<button
				className="hidden absolute right-2 top-2 group-hover:block transition"
				onClick={() => {
					handleDelete(note.id);
				}}
			>
				<i className="fa-solid fa-trash text-red-600"></i>
			</button>
		</div>
	);
};

export default Note;
