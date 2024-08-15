import { Button, Input, Link } from "@nextui-org/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
	const [isLoading, setIsLoading] = useState(false);
	return (
		<div className="mt-10">
			<h1 className="text-center text-4xl">Register Page</h1>
			<div className="max-w-3xl w-4/6 mx-auto mt-4 flex flex-col gap-3">
				<Input type="" label="Email" variant="bordered" />
				<Input type="" label="Password" variant="bordered" />
				<Button isLoading={isLoading}>Register</Button>
				<span>
					Already have an account?{" "}
					<NavLink to="/login">
						<Link>Login</Link>
					</NavLink>
				</span>
			</div>
		</div>
	);
};

export default Register;
