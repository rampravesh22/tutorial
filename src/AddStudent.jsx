import axios from "axios";
import React, { useState, useContext } from "react";
import { GlobalContext } from "./App";
const AddStudent = () => {
	const [inputs, setInputs] = useState({
		name: "",
		age: "",
		rollNumber: "",
	});
	const { setStudents } = useContext(GlobalContext);
	const handleInput = (e) => {
		const { name, value } = e.target;
		setInputs((preState) => {
			return { ...preState, [name]: value };
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const addStudent = async () => {
			try {
				const res = axios.post(
					"https://studentsapi.vercel.app/studentapi/",
					inputs
				);
				setStudents((preState) => {
					return [...preState, inputs];
				});
				setInputs({
					name: "",
					age: "",
					rollNumber: "",
				});
			} catch (error) {
				console.log(error);
			}
		};
		addStudent();
	};
	return (
		<div className="w-3/4 m-auto my-4 ">
			<h1 className="bg-blue-700 text-center uppercase text-xl text-white px-2 py-2 rounded-md">
				Add Student
			</h1>
			<form action="" onSubmit={handleSubmit}>
				<div className="flex flex-col min-h-[200px]">
					<input
						type="text"
						className="px-2 py-2 rounded-md border mt-3"
						placeholder="Name"
						name="name"
						value={inputs.name}
						onChange={handleInput}
					/>
					<input
						type="number"
						className="px-2 py-2 rounded-md border mt-3"
						placeholder="Age"
						name="age"
						value={inputs.age}
						onChange={handleInput}
					/>
					<input
						type="number"
						className="px-2 py-2 rounded-md border mt-3"
						placeholder="Roll Number"
						name="rollNumber"
						value={inputs.rollNumber}
						onChange={handleInput}
					/>
					<button className="bg-blue-600 self-start px-5 py-2 text-white rounded-md mt-2">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddStudent;
