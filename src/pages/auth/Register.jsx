import { Button, Input, Link } from "@nextui-org/react";
import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { url } from "../../api/api";

const Register = () => {
	const [loading, setLoading] = useState(false);
	const [inputs, setInputs] = useState({
		name: "ram",
		email: "ram@gmail.com",
		password: "ram123",
	});

	const handleInputChange = (e) => {
		setInputs((preState) => ({ ...preState, [e.target.name]: e.target.value }));
	};

	const handleRegisterSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const { data } = await axios.post(`${url}/user//register`, inputs);
			console.log(data);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		} finally {
			console.log("finally executed");
		}
	};
	return (
		<div className="mt-10">
			<h1 className="text-center text-4xl">Register Page</h1>
			<form
				onSubmit={handleRegisterSubmit}
				className="max-w-3xl w-4/6 mx-auto mt-4 flex flex-col gap-3"
			>
				<Input
					value={inputs.name}
					name="name"
					type="text"
					label="Name"
					variant="bordered"
					onChange={handleInputChange}
				/>
				<Input
					value={inputs.email}
					name="email"
					type="email"
					label="Email"
					variant="bordered"
					onChange={handleInputChange}
				/>
				<Input
					value={inputs.password}
					name="password"
					type="password"
					label="Password"
					variant="bordered"
					onChange={handleInputChange}
				/>
				<Button
					variant="solid"
					className="bg-slate-900 text-white"
					type="submit"
					isLoading={loading}
				>
					Register
				</Button>
				<span>
					Already have an account?{" "}
					<Link to={"/login"} as={NavLink}>
						Login
					</Link>
				</span>
			</form>
		</div>
	);
};

export default Register;
