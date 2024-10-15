import { Button, Input, Link } from "@nextui-org/react";
import React, { useContext, useState } from "react";
import { Link as RLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
	const { setIsLogged } = useContext(AuthContext);
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLoginSubmit = (e) => {
		e.preventDefault();
		const toastId = toast.loading("Logging in, please wait.");

		setTimeout(() => {
			toast.dismiss(toastId);
			if (email === "admin@gmail.com" && password === "admin") {
				toast.success("Logged in successful.");
				setIsLogged(true);
				navigate("/dashboard");
				localStorage.setItem("token", "djfdjakfjaksjfskdjdksjlksdufsu");
			} else {
				toast.error("Wrong credentials.");
			}
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
				<Button
					type="submit"
					onClick={() => setIsLogged(true)}
					color="primary"
					className="mt-5"
				>
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
