import React, { useContext } from "react";
import GlobalContext from "../contenxt/context";
import Note from "./Note";
const Notes = () => {
	const { notes } = useContext(GlobalContext);
	return (
		<div>
			{notes ? (
				<div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 m-auto w-[80%] mt-9 gap-5">
					{notes.map((note) => {
						return <Note note={note} key={note.id} />;
					})}
				</div>
			) : (
				<div>This data is great</div>
			)}
		</div>
	);
};

export default Notes;
