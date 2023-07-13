import React from "react";
import { NavLink } from "react-router-dom";
const Note = ({ note }) => {
	const aDate = new Date(note.addedDate);
	return (
		<div className="hover:scale-[.97] transition duration-200  relative space-x-2 shadow-lg rounded-lg hover  border-3 border-t-pink-600 border p-5 pb-24 h-[15rem] w-[20rem] text-ellipsis overflow-hidden flex-wrap">
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
		</div>
	);
};

export default Note;
