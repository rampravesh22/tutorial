import React, { useContext, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { GlobalContext } from "./App";
import Loading from "./Loading";

const StudentTable = ({ sid, student }) => {
	const modalRef = useRef();
	const [loading, setLoading] = useState(false);
	const { load, setStudents } = useContext(GlobalContext);
	const [modal, setModal] = useState(false);
	const [deleteMod, setDeleteMod] = useState(false);
	const [inputs, setInputs] = useState({
		id: "",
		name: "",
		age: "",
		rollNumber: "",
	});
	const handleDelete = (id) => {
		const deleteStudent = async (id) => {
			try {
				const res = await axios.delete(
					`https://studentsapi.vercel.app/studentapi/${id}/`
				);
				setStudents((preState) => {
					return preState.filter((student) => {
						return student.id !== id;
					});
				});
				setDeleteMod(false);
			} catch (error) {
				console.log(error);
			}
		};
		deleteStudent(id);
	};

	const handleEdit = (id) => {
		setModal(true);
		setLoading(true);
		const getStudent = async (id) => {
			const res = await axios.get(
				`https://studentsapi.vercel.app/studentapi/${id}/`
			);
			delete res.data.id;
			setInputs(res.data);
			setLoading(false);
		};
		getStudent(id);
	};
	const handleInput = (e) => {
		const { name, value } = e.target;
		setInputs((preState) => {
			return { ...preState, [name]: value };
		});
	};
	const handleModal = (e) => {
		if (e.target === modalRef.current) {
			setModal(false);
		}
	};
	const handleSubmit = (id) => {
		setLoading(true);
		const editStudent = async (id) => {
			try {
				const res = axios.put(
					`https://studentsapi.vercel.app/studentapi/${id}/`,
					inputs
				);
				setLoading(false);
				setModal(false);
				setStudents((preState) => {
					return preState.map((student) => {
						if (student.id === id) {
							return {
								id: id,
								name: inputs.name,
								age: inputs.age,
								rollNumber: inputs.rollNumber,
							};
						}
						return student;
					});
				});
			} catch (error) {
				console.log(error);
			}
		};
		editStudent(id);
	};
	const deleteModal = (id) => {
		setDeleteMod(true);
	};

	return (
		<tr className="hover:bg-slate-500 transition-all relative">
			<td className="border py-2 px-2 text-start border-slate-700 ...">
				{sid}
			</td>
			<td className="border py-2 px-2 text-start border-slate-700 ...">
				{student.name}
			</td>
			<td className="border py-2 px-2 text-start border-slate-700 ...">
				{student.age}
			</td>
			<td className="border py-2 px-2 text-start border-slate-700 ...">
				{student.rollNumber}
			</td>
			<td className="border py-2 px-2 text-start  border-slate-700 hover:text-black cursor-pointer ...">
				<button onClick={() => handleEdit(student.id)}>
					<FontAwesomeIcon icon={faPenToSquare} />
				</button>
				{!modal ? null : (
					<div
						className="fixed cursor-auto bg-black inset-0 flex justify-center  bg-opacity-25 backdrop-blur-md items-center "
						ref={modalRef}
						onClick={handleModal}
					>
						<div className="bg-white h-1/2 w-1/2 rounded-md relative">
							<button
								className="absolute -top-8 text-3xl text-white -right-4"
								onClick={() => setModal(false)}
							>
								x
							</button>
							<h3 className="bg-blue-600 py-2 text-center uppercase text-xl text-white mb-3">
								Edit Student
							</h3>
							<form
								action=""
								onSubmit={() => handleSubmit(student.id)}
								className="flex justify-center items-center"
							>
								{!loading ? (
									<div className="flex flex-col h-full justify-center mt-5">
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
								) : (
									<Loading />
								)}
							</form>
						</div>
					</div>
				)}
			</td>
			<td className="border py-2 px-2 text-start border-slate-700 group hover:text-red-600 cursor-pointer ...">
				<button onClick={() => deleteModal(student.id)}>
					<FontAwesomeIcon icon={faTrash} />
				</button>
				{deleteMod ? (
					!loading ? (
						<Loading />
					) : (
						<div className="absolute backdrop-blur-md inset-0 w-full h-full flex justify-center items-center">
							<button
								className="bg-red-700 mr-4 px-5 py-1 text-white rounded-md"
								onClick={() => handleDelete(student.id)}
							>
								Yes
							</button>
							<button
								className="bg-white text-black px-5 py-1 rounded-md"
								onClick={() => {
									setDeleteMod(false);
								}}
							>
								No
							</button>
						</div>
					)
				) : null}
			</td>
		</tr>
	);
};

export default StudentTable;
