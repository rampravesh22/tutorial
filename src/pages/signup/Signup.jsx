import React, { useState } from "react";
import { Button, Input, Link } from "@nextui-org/react";
import { supabase } from "../../supabaseClient";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
	const [isVisible, setIsVisible] = useState(false);
	const toggleVisibility = () => setIsVisible(!isVisible);

	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState(
		JSON.parse(localStorage.getItem("formData"))
	);
	const [errorMessage, setErrorMessage] = useState(null);

	const handleRegisterSumbit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);

			const { data: user, error: userError } =
				await supabase.auth.signInWithPassword({
					email: formData.email,
					password: formData.password,
				});

			if (userError) {
				const { data, error } = await supabase.auth.signUp({
					email: formData.email,
					password: formData.password,
					options: {
						data: {
							fullName: formData.fullName,
						},
					},
				});
				if (error) {
					toast.error(error.message);
				} else {
					toast.success(
						`Confirmation link has been sent to ${data.user.email}, Please check your email.`,
						{
							className: "border border-green-400",
						}
					);
				}
			} else {
				toast.error("This email is already exists, please try another email.", {
					className: "border border-red-400",
				});
			}
		} catch (error) {
			console.log(error);
			setErrorMessage("An unexpected error occurred. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	const handleInputChange = (e) => {
		setFormData((preState) => {
			return { ...preState, [e.target.name]: e.target.value };
		});
	};

	return (
		<div className="flex justify-center items-center h-screen">
			<form
				onSubmit={handleRegisterSumbit}
				action=""
				method="post"
				className="max-w-lg h-[450px] shadow-slate-300 bg-white border shadow-lg p-7 rounded-md w-[75%]"
			>
				<div className="text-center text-3xl mb-10">Register</div>
				<div className="flex flex-col gap-3">
					<Input
						type="text"
						label="Full Name"
						value={formData.fullName}
						onChange={handleInputChange}
						name="fullName"
						required
					/>
					<Input
						type="email"
						label="Email"
						value={formData.email}
						onChange={handleInputChange}
						name="email"
						required
					/>
					<Input
						type={isVisible ? "text" : "password"}
						label="Password"
						value={formData.password}
						name="password"
						onChange={handleInputChange}
						required
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
				</div>
				{errorMessage && (
					<p className="text-red-500 mt-2 text-sm">{errorMessage}</p>
				)}
				<Button
					type="submit"
					className="w-full mt-6"
					variant="solid"
					color="primary"
					isLoading={loading}
				>
					Register
				</Button>
				<p className="text-gray-600 px-1 text-sm mt-2">
					Already have an account?{" "}
					<Link as={NavLink} className="text-sm" to="/login">
						Login
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Signup;
