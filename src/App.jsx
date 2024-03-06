import { useState } from "react";

function App() {
	const [course, setCourse] = useState("Math");
	const handleInputChange = (e) => {
		console.log(e.target.value);
	};
	return (
		<>
			<div className="flex justify-center">
				<form className="w-40">
					<select
						name="course"
						onChange={handleInputChange}
						value={course}
						id="course"
						className="w-full border border-black rounded-md py-1"
					>
						<option value="math">Math</option>
						<option value="physics">Physics</option>
						<option value="art">Art</option>
						<option value="biology">Biology</option>
						<option value="english">English</option>
					</select>
				</form>
			</div>
		</>
	);
}

export default App;
