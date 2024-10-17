import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button } from "@nextui-org/react";
import { login } from "../redux/actions/authActions";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const error = useSelector((state) => state.auth.error);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login({ username, password }));
	};

	return (
		<form onSubmit={handleSubmit}>
			<Input
				label="Username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<Input
				type="password"
				label="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<Button type="submit">Login</Button>
			{error && <div color="error">{error}</div>}
		</form>
	);
};

export default Login;
