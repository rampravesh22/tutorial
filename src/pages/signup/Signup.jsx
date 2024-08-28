import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { supabase } from "../../supabaseClient";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
const Signup = () => {
	const [isVisible, setIsVisible] = useState(false);
	const toggleVisibility = () => setIsVisible(!isVisible);
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		email: "rickwart1@gmail.com",
		password: "toofanram",
	});
	const handleRegisterSumbit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			console.log(formData);
			const { data, error } = await supabase.auth.signUp({
				email: formData.email,
				password: formData.password,
			});
			if (error) {
				console.log(error);
			} else {
				console.log(data);
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const handleInputChange = (e) => {
		setFormData((preState) => {
			return { ...preState, [e.target.name]: e.target.value };
		});
	};
	return (
		<form
			onSubmit={handleRegisterSumbit}
			action=""
			method="post"
			className="max-w-lg h-[380px] border shadow-lg  p-7 rounded-md w-[75%]"
		>
			<div className="text-center text-3xl mb-10">Register</div>
			<Input
				type="text"
				errorMessage="this is not correct"
				label="Email"
				value={formData.email}
				onChange={handleInputChange}
				name="email"
			/>
			<Input
				type={isVisible ? "text" : "password"}
				errorMessage="this is not correct"
				label="Password"
				value={formData.password}
				name="password"
				onChange={handleInputChange}
				className="mt-6"
				endContent={
					<button
						type="button"
						className="focus:outline-none"
						onClick={toggleVisibility}
					>
						{isVisible ? (
							<BsEyeSlashFill className="text-2xl text-default-400 pointer-events-none" />
						) : (
							<BsEyeFill className="text-2xl text-default-400 pointer-events-none" />
						)}
					</button>
				}
			/>
			<Button
				type="submit"
				className="w-full mt-6"
				variant="solid"
				color="primary"
				isLoading={loading}
			>
				Register
			</Button>
		</form>
	);
};

export default Signup;
