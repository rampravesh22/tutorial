import React, { useState } from "react";

// Define the initial subjects array
const initialSubjects = [
	{ name: "Math", checked: false },
	{ name: "Physics", checked: false },
	{ name: "Chemistry", checked: false },
	{ name: "Biology", checked: false },
	{ name: "English", checked: false },
];

// Define the App component
function App() {
	// Use state hook to manage the subjects array
	const [subjects, setSubjects] = useState(initialSubjects);

	// Define a handler function to toggle the checked status of a subject
	const handleCheck = (index) => {
		// Make a copy of the subjects array
		const newSubjects = [...subjects];
		// Toggle the checked property of the subject at the given index
		newSubjects[index].checked = !newSubjects[index].checked;
		// Update the state with the new array
		setSubjects(newSubjects);
	};

	// Define a function to render the checkboxes
	const renderCheckboxes = () => {
		// Map over the subjects array and return a checkbox element for each subject
		return subjects.map((subject, index) => (
			<div key={index}>
				<input
					type="checkbox"
					id={subject.name}
					name={subject.name}
					checked={subject.checked}
					onChange={() => handleCheck(index)}
				/>
				<label htmlFor={subject.name}>{subject.name}</label>
			</div>
		));
	};

	// Return the JSX code to display the checkboxes
	return <div className="App">{renderCheckboxes()}</div>;
}

export default App;
