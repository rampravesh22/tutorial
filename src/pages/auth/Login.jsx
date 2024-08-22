import { Button, Input, Link } from "@nextui-org/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Link as RLink } from "react-router-dom";
import { API_URL } from "../../api/api";
import { GlobalContext } from "../../context/ContextProvider";

const Login = () => {
	const [loading, setLoading] = useState(false);
	const { setToken, setName } = useContext(GlobalContext);
	const [inputs, setInputs] = useState({
		email: "",
		password: "ram123",
	});

	const handleInputChange = (e) => {
		setInputs((preState) => ({ ...preState, [e.target.name]: e.target.value }));
	};

	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const { data } = await axios.post(`${API_URL}/user/login`, inputs);
			console.log(data);
			localStorage.setItem("token", data.token);
			localStorage.setItem("name", data.name);

			console.log("inside of login.jsx", data.token);
			setToken(data.token);
			setLoading(false);
			setName(data.name);
		} catch (error) {
			setLoading(false);
		} finally {
		}
	};
	return (
		<div className="mt-10">
			<h1 className="text-center text-4xl">Login</h1>
			<form
				onSubmit={handleLoginSubmit}
				className="max-w-3xl w-4/6 mx-auto mt-4 flex flex-col gap-3"
			>
				<Input
					value={inputs.email}
					name="email"
					type="email"
					label="Email"
					variant="bordered"
					onChange={handleInputChange}
					required
					className="required:border-red-600 required:border"
				/>
				<Input
					value={inputs.password}
					name="password"
					type="password"
					label="Password"
					variant="bordered"
					onChange={handleInputChange}
					required
				/>
				<Button
					variant="solid"
					className="bg-slate-900 text-white"
					type="submit"
					isLoading={loading}
				>
					Login
				</Button>
				<span>
					Already have an account?{" "}
					<Link to={"/register"} as={RLink}>
						Register
					</Link>
				</span>
			</form>
		</div>
	);
};

export default Login;
