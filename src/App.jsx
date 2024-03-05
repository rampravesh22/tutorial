import { useState } from "react";

const initialSubjects = [
	{ name: "Math", checked: false },
	{ name: "Physics", checked: false },
	{ name: "Chemistry", checked: false },
	{ name: "Biology", checked: false },
	{ name: "English", checked: false },
];

function App() {
	const [subjects, setSubjects] = useState(initialSubjects);
	const handleCheckChange = (e) => {
		const checked = e.target.checked;
		const value = e.target.value;
		if (checked) {
			setSubjects((preState) => {
				return preState.map((subject) => {
					if (subject.name.toLowerCase() === value) {
						return { ...subject, checked: true };
					} else {
						return subject;
					}
				});
			});
		} else {
			setSubjects((preState) => {
				return preState.map((subject) => {
					if (subject.name.toLowerCase() === value) {
						return { ...subject, checked: false };
					} else {
						return subject;
					}
				});
			});
		}
	};
	console.table(subjects);
	return (
		<>
			<div className="">
				<form action="" className=" flex mt-5  flex-col w-32 gap-3 m-auto">
					{subjects.map((subject, index) => (
						<div key={index} className="flex items-center gap-2">
							<input
								type="checkbox"
								name={subject.name.toLowerCase()}
								id={subject.name.toLowerCase()}
								checked={subject.checked}
								value={subject.name.toLowerCase()}
								onChange={handleCheckChange}
								className=" transition-colors duration-500 border w-12  h-12   checked:accent-yellow-500 checked:rounded-sm"
							/>
							<label htmlFor={subject.name.toLowerCase()}>{subject.name}</label>
						</div>
					))}
				</form>
			</div>
		</>
	);
}

export default App;
