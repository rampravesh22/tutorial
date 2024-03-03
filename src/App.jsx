import { useEffect, useState } from "react";

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
	useEffect(() => {
		console.table(subjects);
	}, [subjects]);
	return (
		<>
			<div className="">
				<form action="" className=" flex flex-col w-32 gap-3 m-auto">
					{subjects.map((subject, index) => (
						<div key={index} className=" space-x-3 flex gap-4 flex-row">
							<input
								type="checkbox"
								name={subject.name.toLowerCase()}
								id={subject.name.toLowerCase()}
								checked={subject.checked}
								value={subject.name.toLowerCase()}
								onChange={handleCheckChange}
								className="accent-pink-700 h-10 w-10"
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
