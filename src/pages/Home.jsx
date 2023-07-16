import React from "react";
import { useEffect, useState } from "react";
import Note from "../components/Note";
import axios from "axios";

function Home() {
	const [notes, setNotes] = useState([]);
	useEffect(() => {
		const getNotes = async () => {
			try {
				const { data } = await axios.get(
					"http://127.0.0.1:8000/api/notes/"
				);
				setNotes(data);
			} catch (error) {
				console.log(error);
			}
		};
		getNotes();
	}, []);
	const deleteNote = ({ id, msg }) => {
		console.log("msg:", msg);
		setNotes((preNotes) => {
			return preNotes.filter((note) => {
				return note.id !== id;
			});
		});
	};
	return (
		<>
			<div className="m-auto  w-[80%] mt-4 min-w-[200px]">
				<h1 className="text-center mb-3 w-[80%] m-auto bg-red-600 text-white py-1.5 rounded">
					Note Delete Successfully
				</h1>
				<div className="flex flex-wrap gap-4 justify-center">
					{notes.map((note) => {
						return (
							<Note
								key={note.id}
								note={note}
								propDeleteNote={deleteNote}
							></Note>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default Home;
