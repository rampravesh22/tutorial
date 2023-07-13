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
	return (
		<>
			<div className="m-auto  w-[80%] mt-4 min-w-[200px]">
				<div className="flex flex-wrap gap-4 justify-center">
					{notes.map((note) => {
						return <Note key={note.id} note={note}></Note>;
					})}
				</div>
			</div>
		</>
	);
}

export default Home;
