import axios from "axios";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/ContextProvider";
const names = [
	"Rampravesh Chaudhari",
	"Rohan Gupta",
	"Ajay Sahu",
	"Sharavan Chaudhari",
	"Rohit Dwivedi",
	"Bhole Dwivedi",
	"Chetan Patel",
	"Nitin Shukla",
	"Mandahta Pandey",
	"Akhilesh Chaudhari",
	"Pappu Paswan",
	"Abhishek Patel",
	"Amar Chaudhari",
	"Mohan Kapoor",
];
const emails = [
	"Rampravesh.Chaudhari@gmail.com",
	"Rohan.Gupta@gmail.com",
	"Ajay.Sahu@gmail.com",
	"Sharavan.Chaudhari@gmail.com",
	"Rohit.Dwivedi@gmail.com",
	"Bhole.Dwivedi@gmail.com",
	"Chetan.Patel@gmail.com",
	"Nitin.Shukla@gmail.com",
	"Mandahta.Pandey@gmail.com",
	"Akhilesh.Chaudhari@gmail.com",
	"Pappu.Paswan@gmail.com",
	"Abhishek.Patel@gmail.com",
	"Amar.Chaudhari@gmail.com",
	"Mohan.Kapoor@gmail.com",
];

const AddStudents = () => {
	const [modal, setModal] = useState(false);
	const { setStudents } = useContext(GlobalContext);

	const [inputs, setInputs] = useState({
		name: names[Math.floor(Math.random() * names.length)],
		age: Math.floor(Math.random() * 30),
		email: emails[Math.floor(Math.random() * names.length)],
	});
	const handleSubmit = (e) => {
		const createStudent = (inputs) => {
			return { id: Date(), ...inputs };
		};
		e.preventDefault();
		console.log(inputs);
		const addData = async () => {
			try {
				const res = await axios.post(
					"http://localhost:3000/students",
					createStudent(inputs)
				);
				setStudents((preState) => {
					return [...preState, inputs];
				});
				setInputs({ name: "", age: "", email: "" });
				setModal(false);
			} catch (error) {
				console.log(error);
			}
		};
		addData();
	};

	const handleModal = () => {
		setModal(!modal);
	};
	const handleOutSideClick = (e) => {
		if (e.target === document.querySelector("#modal-outside")) {
			setModal(!modal);
		}
	};
	const handleChange = (e) => {
		const { name, value } = e.target;

		setInputs((preState) => {
			return { ...preState, [name]: value };
		});
	};
	return (
		<div className="pt-20 flex flex-col justify-center items-center">
			<div className="add-btn w-full text-white flex justify-center">
				<button
					type="button"
					onClick={handleModal}
					className="bg-gray-800 uppercase font-light  w-1/2 m-auto self-stretch py-3 rounded-md text-3xl hover:bg-gray-900 transition-all"
				>
					Add Student
				</button>
			</div>
			{modal ? (
				<div
					className={`modal fixed bg-gray-300 inset-0 bg-opacity-100 backdrop-blur-lg z-10 flex justify-center items-center   `}
					onClick={handleOutSideClick}
					id="modal-outside"
				>
					<form
						action=""
						onSubmit={handleSubmit}
						className={`shadow-md bg-white flex flex-col duration-300 transition-all gap-5 rounded-md p-10 w-[70%] md:w-2/3 max-w-[460px] min-h-3/2`}
					>
						<h2 className="bg-gray-700 uppercase text-2xl py-2 text-center text-white rounded-md">
							Add Student
						</h2>
						<div className="form-field">
							<input
								required
								type="text"
								name="name"
								value={inputs.name}
								id="name"
								placeholder="Name"
								onChange={handleChange}
								className="w-full border-2 px-2 py-2 rounded-md focus:shadow-none focus:outline-none focus:border-gray-500"
							/>
						</div>
						<div className="form-field">
							<input
								required
								type="email"
								name="email"
								value={inputs.email}
								id="email"
								onChange={handleChange}
								placeholder="Email"
								className="w-full border-2 px-2 py-2 rounded-md focus:shadow-none focus:outline-none focus:border-gray-500"
							/>
						</div>
						<div className="form-field">
							<input
								required
								type="age"
								name="age"
								id="age"
								value={inputs.age}
								onChange={handleChange}
								placeholder="Age"
								className="w-full border-2 px-2 py-2 rounded-md focus:shadow-none focus:outline-none focus:border-gray-500"
							/>
						</div>

						<div className="form-field text-center mt-4">
							<button
								type="submit"
								className="bg-gray-800 px-5 py-2 text-white w-4/5 rounded-md"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			) : null}
		</div>
	);
};

export default AddStudents;
