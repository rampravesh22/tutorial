import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../utils/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const [name, setName] = useState("ram");
	const [email, setEmail] = useState("ram@gmail.com");
	const [password, setPassword] = useState("12345");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const id = toast.loading("Signing up, wait...");
		try {
			const { data } = await axios.post(`${BASE_URL}/user/register`, {
				name,
				email,
				password,
			});

			toast.success(data.message, { id });
			if (data.success) {
				navigate("/login");
			}
		} catch (error) {
			console.log(error);
			toast.error("Something went wrong", { id });
		}
	};

	return (
		<div className="flex justify-center">
			<form
				action=""
				onSubmit={handleSubmit}
				className="flex flex-col mt-32 w-[90%] max-w-[500px] gap-6 shadow-md p-10 border"
			>
				<h1 className="text-center text-4xl mb-5">Register</h1>
				<input
					type="text"
					name="fullName"
					placeholder="Enter full name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="border px-2 py-2 w-full rounded-md border-gray-300"
				/>
				<input
					type="email"
					name="email"
					value={email}
					placeholder="Enter email"
					onChange={(e) => setEmail(e.target.value)}
					className="border px-2 py-2 w-full rounded-md border-gray-300"
				/>
				<input
					type="password"
					name="password"
					placeholder="Enter password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="border px-2 py-2 w-full rounded-md border-gray-300"
				/>
				<button
					type="submit"
					className="bg-gray-900 text-white  py-2 rounded-full"
				>
					Sign up
				</button>
			</form>
		</div>
	);
};

export default Register;
