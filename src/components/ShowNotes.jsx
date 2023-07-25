import React from "react";
import { useContext } from "react";
import Note from "./Note";
import { GlobalContext } from "./contextAPI";
const ShowNotes = () => {
	const { notes } = useContext(GlobalContext);
	return (
		<div className="mt-10 w-[90%] bg-white m-auto p-3">
			<ul>
				{notes.map((note, index) => {
					return <Note note={note} key={note.id} ind={index + 1} />;
				})}
			</ul>
		</div>
	);
};

export default ShowNotes;
