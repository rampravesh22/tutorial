import { useEffect, useState } from "react";

function App() {
	const [date, setDate] = useState("");
	const handleDateInput = (e) => {
		setDate(e.target.value);
	};
	useEffect(() => {
		let date = new Date();
		let year = date.getFullYear();
		let month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are 0-based in JavaScript
		let day = ("0" + date.getDate()).slice(-2);
		let formattedDate = `${year}-${month}-${day}`; // "2024-03-06"
		setDate(formattedDate);
	});
	return (
		<>
			<div className="flex justify-center">
				<input
					type="date"
					className="border px-8 mt-4 "
					onChange={handleDateInput}
					value={date}
				/>
			</div>
			<div className="flex justify-center mt-5">{date}</div>
		</>
	);
}

export default App;
