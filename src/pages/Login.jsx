import { Button, Input, Link } from "@nextui-org/react";
import React, { useState } from "react";
import { Link as RLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/authActions";
import toast from "react-hot-toast";

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("ram@gmail.com");
	const [password, setPassword] = useState("12345");
	const dispatch = useDispatch();

	const handleLoginSubmit = (e) => {
		e.preventDefault();

		const toastId = toast.loading("Logging in, please wait.");

		setTimeout(() => {
			dispatch(login({ email, password }));
			toast.success("Logged in successful.", { id: toastId });
			navigate("/");
		}, 600);
	};
	return (
		<div className="h-full flex justify-center items-center">
			<form
				onSubmit={handleLoginSubmit}
				className="shadow-lg px-5 py-8 border-gray-300 my-40 rounded-md border w-[80%] max-w-[450px] flex gap-3 flex-col"
			>
				<div className="text-3xl text-center mb-10 text-blue-700">Login</div>
				<div className=" flex flex-col gap-5">
					<div className="mb-4">
						<label className="block text-gray-700 mb-2">Email </label>
						<input
							type="email"
							name="name"
							className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Your Email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 mb-2">Password </label>
						<input
							type="password"
							name="password"
							className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
							value={password}
							placeholder="Your Password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
				</div>
				<Button type="submit" color="primary" className="mt-5">
					Login
				</Button>
				<div>
					Don&apos;t have an account ?{" "}
					<Link as={RLink} to="/register">
						Register
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Login;
