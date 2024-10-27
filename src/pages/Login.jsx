import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../utils/api";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("ram@gmail.com");
	const [password, setPassword] = useState("12345");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(login({ email, password }, navigate));
	};

	return (
		<div className="flex justify-center">
			<form
				action=""
				onSubmit={handleSubmit}
				className="flex flex-col mt-32 w-[90%] max-w-[500px] gap-6 shadow-md p-10 border"
			>
				<h1 className="text-center text-4xl mb-5">Login</h1>

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
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
