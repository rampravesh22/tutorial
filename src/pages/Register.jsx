import { Button, Input, Link } from "@nextui-org/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link as RLink, useNavigate } from "react-router-dom";
import { register } from "../actions/authActions";
import toast from "react-hot-toast";

const Register = () => {
	const [name, setName] = useState("ram");
	const [email, setEmail] = useState("ram@gmail.com");
	const [password, setPassword] = useState("12345");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleUserRegister = async (e) => {
		e.preventDefault();
		dispatch(register({ name, email, password }));
	};
	return (
		<div className="h-full flex justify-center items-center">
			<form
				onSubmit={handleUserRegister}
				className="shadow-lg px-5 py-8 my-40 border-gray-300 rounded-md border w-[80%] max-w-[450px] flex gap-3 flex-col"
			>
				<div className="text-3xl text-center mb-10 text-blue-700">Register</div>
				<div className=" flex flex-col">
					<div className="mb-4">
						<label className="block text-gray-700 mb-2">Name </label>
						<input
							type="text"
							name="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Your Name"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 mb-2">Email </label>
						<input
							type="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Your Email"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 mb-2">Password </label>
						<input
							type="password"
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Your Password"
						/>
					</div>
				</div>
				<Button type="submit" color="primary" className="mt-5">
					Sign Up
				</Button>
				<div>
					Already have an account ?{" "}
					<Link as={RLink} to="/login">
						Login
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Register;
