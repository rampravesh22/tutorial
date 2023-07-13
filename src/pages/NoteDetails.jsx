import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NoteDetails = () => {
	const { id } = useParams();
	const [note, setNote] = useState({});
	useEffect(() => {
		const getNote = async () => {
			const res = await axios.get(`http://127.0.0.1:8000/api/notes/${id}`);
			console.log(res.data);
			setNote(res.data);
		};
		getNote();
	}, []);

	return (
		<div className="w-[70%] relative m-auto min-w-[300px] max-w-[700px] mt-5">
			<div className="font-bold capitalize text-3xl">{note.title}</div>
			<hr />
			<div>
				<p className="first-letter:text-5xl mt-5">{note.content}</p>
			</div>
			<div className="absolute top-5 right-2 font-light text-xs">
				<span>{new Date(note.addedDate).toLocaleDateString()}</span>
			</div>
		</div>
	);
};

export default NoteDetails;
