import { useState } from "react";
import { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const createNote = (content) => {
	return { id: Date(), content };
};

function App() {
	const [notes, setNotes] = useState([]);
	const [input, setInput] = useState("");
	const [error, setError] = useState(false);

	useEffect(() => {
		const getNotes = localStorage.getItem("note");
		if (getNotes) {
			setNotes(JSON.parse(getNotes));
		} else {
			localStorage.setItem("note", JSON.stringify(notes));
		}
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (input.length < 4) {
			setError(true);
			return null;
		}
		const getNotes = JSON.parse(localStorage.getItem("note"));
		const updatedNote = [...getNotes, createNote(input)];
		setNotes(updatedNote);
		localStorage.setItem("note", JSON.stringify(updatedNote));
		setInput("");
		setError(false);
	};
	const deleteNote = (id) => {
		const getNoteFromStorage = JSON.parse(localStorage.getItem("note"));
		setNotes(getNoteFromStorage);
		const updatedNote = notes.filter((note) => {
			return note.id !== id;
		});
		setNotes(updatedNote);
		localStorage.setItem("note", JSON.stringify(updatedNote));
	};
	return (
		<>
			<div className=" min-h-screen m-auto md:p-5">
				<div className="md:w-[90%] w-full min-h-[90vh] m-auto max-w-[35rem] min-w-[20rem] bg-indigo-800 p-10">
					<form
						action=""
						onSubmit={handleSubmit}
						className="flex flex-col"
					>
						<div className="flex justify-between md:flex-row flex-col">
							<input
								type="text"
								className="border-2 border-black rounded-md h-10 px-2 flex-grow"
								onChange={(e) => setInput(e.target.value)}
								value={input}
								placeholder="notes"
							/>
							<button
								type="submit"
								className="bg-rose-600 self-end md:self-auto hover:bg-rose-800 transition text-white px-5 py-2 rounded-md md:ml-2 md:mt-0 mt-2"
							>
								<AiOutlinePlus />
							</button>
						</div>
						{error && (
							<span className="text-white px-1 transition duration-200">
								Please enter more than four character.
							</span>
						)}
					</form>
					<ul className="mt-3">
						{notes
							.slice()
							.sort((a, b) => b.id - a.id)
							.map((note) => {
								return (
									<li
										key={note.id}
										className="border-2 mt-4 p-2 group flex justify-between text-lg  bg-white rounded hover:bg-gray-200 transition-all"
									>
										{note.content}
										<button
											className="hidden group-hover:block"
											onClick={() => deleteNote(note.id)}
										>
											<MdDelete className="text-2xl text-red-700" />
										</button>
									</li>
								);
							})}
					</ul>
				</div>
			</div>
		</>
	);
}

export default App;
