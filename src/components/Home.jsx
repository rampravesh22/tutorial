import React, { useContext, useRef, useState } from "react";
import { getStorage, setStorage } from "../localstorage/storage";
import GlobalContext from "../contenxt/context";
import Loader from "./Loader";

const createNote = (data) => {
	return { id: Date(), data };
};

const Home = () => {
	const btnRef = useRef();
	const { setNotes, loading, setLoading, setSuccess, disable, setDisable } =
		useContext(GlobalContext);
	const [input, setInput] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setDisable(true);

		setTimeout(() => {
			const getNotes = getStorage("notes");
			const note = createNote(input);
			setStorage([...getNotes, note]);
			setNotes((preState) => {
				return [...preState, note];
			});
			setLoading(false);
			setSuccess(true);
			setInput("");
			setDisable(false);
			setTimeout(() => {
				setSuccess(false);
			}, 3000);
		}, 2000);
	};

	return (
		<div className="bg-slate-900 h-16 flex justify-center items-center">
			<form
				action=""
				className="flex gap-3 w-[80%]"
				onSubmit={handleSubmit}
			>
				<input
					value={input}
					required
					onChange={(e) => setInput(e.target.value)}
					type="text"
					placeholder="enter note content"
					className="border-none outline-none w-[80%] px-2 py-1.5 rounded-md  focus:ring focus:ring-red-600"
				/>

				<button
					type="submit"
					ref={btnRef}
					disabled={disable}
					className="btn focus:ring ring-red-600 uppercase"
				>
					{loading ? <Loader /> : "Add"}
				</button>
			</form>
		</div>
	);
};

export default Home;
