import { useState } from "react";

function App() {
	const [gender, setGender] = useState("Male");
	const handleInputChange = (e) => {
		setGender(e.target.value);
	};
	console.log(gender);
	return (
		<>
			<div className="">
				<form action="" className="flex gap-4">
					<span>Gender</span>
					<label htmlFor="male">Male</label>
					<input
						onChange={handleInputChange}
						type="radio"
						name="gender"
						id="male"
						value="Male"
						checked={gender === "Male"}
					/>
					<label htmlFor="female">Female</label>
					<input
						onChange={handleInputChange}
						type="radio"
						name="gender"
						id="female"
						value="Female"
						checked={gender === "Female"}
					/>
					<label htmlFor="other">Other</label>
					<input
						onChange={handleInputChange}
						type="radio"
						name="gender"
						id="other"
						value="Other"
						checked={gender === "Other"}
					/>
				</form>
			</div>
		</>
	);
}

export default App;
