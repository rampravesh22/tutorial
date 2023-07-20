import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = (props) => {
	const [students, setStudents] = useState([]);
	const [loading, setLoading] = useState(true);
	const [modal, setModal] = useState(false);
	const [stId, setStId] = useState(0);
	const [inputs, setInputs] = useState({
		name: "",
		age: "",
		rollNumber: "",
	});

	useEffect(() => {
		const getStudents = async () => {
			try {
				const res = await axios.get(
					"https://studentsapi.vercel.app/studentapi/"
				);
				console.log(res.data);
				setStudents(res.data);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		getStudents();
	}, []);

	const handleAdd = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const res = await axios.post(
				"https://studentsapi.vercel.app/studentapi/",
				inputs
			);
			console.log(res.data);
			setLoading(false);
			setStudents((preState) => {
				return [...preState, inputs];
			});
			setInputs({ name: "", age: "", rollNumber: "" });
		} catch (error) {
			console.log(error);
		}
	};

	const handleInput = (e) => {
		const { name, value } = e.target;
		setInputs((prevState) => {
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};

	const handelDelete = (id) => {
		setLoading(true);
		const deleteStudent = async (id) => {
			try {
				const res = await axios.delete(
					`https://studentsapi.vercel.app/studentapi/${id}/`
				);
				console.log(res.data);
				console.log("deleted data");
				setLoading(false);
				setStudents((preState) => {
					return preState.filter((student) => {
						return student.id !== id;
					});
				});
			} catch (error) {
				console.log(error);
			}
		};
		deleteStudent(id);
	};

	const handleUpdate = (e) => {
		e.preventDefault();
		const updateStudent = async (stId) => {
			console.log(stId);
			try {
				const res = await axios.put(
					`https://studentsapi.vercel.app/studentapi/${stId}/`,
					inputs
				);
				console.log(res.data);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		updateStudent(stId);
	};

	const handleEdit = (id) => {
		setModal(true);

		const editStudent = async (id) => {
			setLoading(true);
			try {
				const res = await axios.get(
					`https://studentsapi.vercel.app/studentapi/${id}/`
				);
				setInputs(res.data);
				setStId(id);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		editStudent(id);
	};

	return (
		<div className="container w-[90%] m-auto shadow-2xl mt-10 rounded-xl h-[90vh] p-20">
			<div className="my-4">
				<form action="" method="post">
					<div className="flex justify-between flex-wrap gap-4 content-center">
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Name"
							className="border-2 rounded px-2 py-1"
							onChange={handleInput}
							value={inputs.name}
						/>
						<input
							type="number"
							name="age"
							id="name"
							placeholder="Age"
							className="border-2 rounded px-2 py-1"
							onChange={handleInput}
							value={inputs.age}
						/>
						<input
							type="number"
							name="rollNumber"
							id="name"
							placeholder="Roll Number"
							className="border-2 rounded px-2 py-1"
							onChange={handleInput}
							value={inputs.rollNumber}
						/>
					</div>
				</form>
			</div>

			<div>
				<button
					onClick={handleAdd}
					className="border px-5 uppercase rounded-md bg-pink-600 hover:bg-pink-700 transition-all text-white py-1"
				>
					Add
				</button>
			</div>
			<div>
				{loading ? (
					<div className="origin-right duration-1000 w-10 h-10 rounded-full relative border  overflow-hidden flex justify-center items-center">
						<div className="w-20 h-12 bg-black  animate-spin absolute  left-4 origin-left"></div>
						<div className="bg-white w-8 h-8 rounded-full z-30 border "></div>
					</div>
				) : (
					<ul>
						{students.map((student) => {
							return (
								<li
									key={student.id}
									className="flex justify-between border-2 py-2 px-2 mt-3"
								>
									<span>{student.name}</span>
									<button
										onClick={() => {
											handleEdit(student.id);
										}}
										className="border px-5 uppercase rounded-md bg-pink-600 hover:bg-pink-700 transition-all text-white py-1"
									>
										Edit
									</button>
									<button
										onClick={() => {
											handelDelete(student.id);
										}}
										className="border px-5 uppercase rounded-md bg-pink-600 hover:bg-pink-700 transition-all text-white py-1"
									>
										Delete
									</button>
								</li>
							);
						})}
					</ul>
				)}
			</div>
			{!modal ? null : (
				<div className="absolute  z-10 border-8 bg-slate-600 w-full h-screen left-0 top-0 flex justify-center items-center ">
					<form
						action=""
						className="w-1/3 h-1/3 bg-white rounded-md pb-40 flex flex-col p-12 "
						onSubmit={handleUpdate}
					>
						{loading ? (
							<div className="w-full h-full justify-center items-center">
								<div className="origin-right duration-1000 w-10 h-10 rounded-full relative border  overflow-hidden flex justify-center items-center">
									<div className="w-20 h-12 bg-black  animate-spin absolute  left-4 origin-left"></div>
									<div className="bg-white w-8 h-8 rounded-full z-30 border "></div>
								</div>
							</div>
						) : (
							<div className="flex flex-col justify-stretch">
								<input
									type="text"
									name="name"
									value={inputs.name}
									placeholder="Name"
									className="border-2 mt-3 px-3 py-1 rounded-md"
									onChange={handleInput}
								/>
								<input
									type="text"
									name="age"
									value={inputs.age}
									placeholder="Age"
									className="border-2 mt-3 px-3 py-1 rounded-md"
									onChange={handleInput}
								/>
								<input
									type="text"
									name="rollNumber"
									placeholder="Roll Number"
									value={inputs.rollNumber}
									onChange={handleInput}
									className="border-2 mt-3 px-3 py-1 rounded-md"
								/>
								<button
									onClick={() => {
										handelDelete();
									}}
									className="self-start mt-5 border px-5 uppercase rounded-md bg-pink-600 hover:bg-pink-700 transition-all text-white py-1"
								>
									Update
								</button>
							</div>
						)}
					</form>
				</div>
			)}
		</div>
	);
};

export default Home;
