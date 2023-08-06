import { useState } from "react";
import { useEffect } from "react";

function App() {
	const [notes, setNotes] = useState([
		{
			id: Date.now(),
			content: "hello",
		},
		{
			id: Date.now(),
			content: "find the data",
		},
		{
			id: Date.now(),
			content: "find the data",
		},
	]);
	useEffect(() => {
		const getNotes = localStorage.getItem("note");
		if (getNotes) {
			setNotes(JSON.parse(getNotes));
		}
		console.log(getNotes);
	}, []);
	return (
		<>
			<div>Main</div>
		</>
	);
}

export default App;
