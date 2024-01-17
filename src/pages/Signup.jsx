import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import React, { useState } from "react";
import loginSignUpImage from "../assets/login-animation.gif";
import { Link, useNavigate } from "react-router-dom";
import { imageToBase64 } from "../utils/imageToBase64";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
const dummyData = {
	firstName: "Rampravesh",
	lastName: "Chaudhari",
	email: "ram@gmail.com",
	password: "ram123",
	confirmPassword: "ram123",
	proifleImage: "",
};
const initialData = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	confirmPassword: "",
	proifleImage: "",
};
const Signup = () => {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [data, setData] = useState(dummyData);
	const [loading, setLoading] = useState(false);
	const hanldeInputChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setData((preState) => {
			return { ...preState, [name]: value };
		});
	};

	const hanldeProfileChange = async (e) => {
		const newFile = e.target.files[0];

		try {
			const imageData = await imageToBase64(newFile);
			// preState : initial state for useState
			setData((preState) => {
				return { ...preState, proifleImage: imageData };
			});
		} catch (error) {
			console.log(error);
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { password, confirmPassword } = data;
		setLoading(true);
		if (password === confirmPassword) {
			const toastId = toast.loading("Please wait, Signing up.");

			try {
				const serverRes = await axios.post(
					"http://localhost:3000/api/register",
					data
				);
				toast.dismiss(toastId);
				if (serverRes.data.created) {
					toast.success("Sign up sucessful");
					navigate("/login");
				} else {
					toast.error("Email already exists");
				}
				console.log(serverRes.data);
				setPasswordError(false);
				setLoading(false);
			} catch (error) {
				toast.dismiss(toastId);
				setLoading(false);
				toast.error("Something went wrong.");
			}
		} else {
			setPasswordError(true);
			setLoading(false);
		}
	};

	return (
		<>
			<Toaster
				position="top-right"
				toastOptions={{
					className: "shadow-md border-2 drop-shadow-md",
				}}
			/>
			<div className="p-3 md:p-4 flex justify-center items-center h-full">
				<div className="w-full rounded max-w-md bg-white m-auto flex justify-center items-center flex-col p-4">
					<h1 className="text-center text-xl py-2 text-white mb-2 bg-red-600 w-full">
						Register Here
					</h1>
					<div className="flex justify-center items-center flex-col">
						<div className="w-20 h-20 flex justify-center items-center relative overflow-hidden border border-red-500 shadow-md rounded-full drop-shadow-md">
							<img
								src={
									data.proifleImage
										? data.proifleImage
										: loginSignUpImage
								}
								className="w-[70%]"
								alt=""
							/>
							<label
								htmlFor="profileImage"
								className=" absolute  -bottom-1.5 h-1/3 w-full"
							>
								<div className="  bg-slate-500 cursor-pointer w-full text-center">
									<p className="text-xs pb-2  text-white">Upload</p>
								</div>
								<input
									type="file"
									onChange={hanldeProfileChange}
									id="profileImage"
									className="hidden"
									accept="image/"
								/>
							</label>
						</div>
					</div>
					<form
						action=""
						onSubmit={handleSubmit}
						className="w-full py-3 flex flex-col"
						method="post"
					>
						<div>
							<label htmlFor="firstName">First Name</label>
							<input
								type="text"
								id="firstName"
								name="firstName"
								value={data.firstName}
								required
								onChange={hanldeInputChange}
								className="w-full mt-1 bg-slate-200 px-2 py-1 rounded  focus:outline-blue-600 "
							/>
						</div>
						<div className="mt-5">
							<label htmlFor="lastName">Last Name</label>
							<input
								type="text"
								required
								onChange={hanldeInputChange}
								id="lastName"
								value={data.lastName}
								name="lastName"
								className="w-full mt-1 bg-slate-200 px-2 py-1 rounded focus:outline-blue-600"
							/>
						</div>
						<div className="mt-5">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								required
								autoComplete="off"
								onChange={hanldeInputChange}
								name="email"
								value={data.email}
								className="w-full mt-1 bg-slate-200 px-2 py-1 rounded focus:outline-blue-600"
							/>
						</div>
						<div className="mt-5 relative">
							<label htmlFor="password">Password</label>
							<div className="w-full relative rounded border">
								<input
									type={showPassword ? "text" : "password"}
									id="password"
									onChange={hanldeInputChange}
									required
									name="password"
									value={data.password}
									className="w-full  bg-slate-200 h-full px-2 py-1 rounded focus:outline-blue-600"
								/>
								{data.password.length > 0 && (
									<div
										className="absolute right-1 text-xl top-[50%] translate-y-[-50%]
										"
									>
										{!showPassword ? (
											<button
												type="button"
												onClick={() =>
													setShowPassword(!showPassword)
												}
												className="flex justify-center items-center"
											>
												<AiOutlineEyeInvisible />
											</button>
										) : (
											<button
												type="button"
												className="flex justify-center items-center"
												onClick={() =>
													setShowPassword(!showPassword)
												}
											>
												<AiOutlineEye />
											</button>
										)}
									</div>
								)}
							</div>
						</div>
						<div className="mt-5 relative">
							<label htmlFor="confirmPassword">Confirm Password</label>
							<div className="w-full relative rounded  border">
								<input
									type={showConfirmPassword ? "text" : "password"}
									id="confirmPassword"
									onChange={hanldeInputChange}
									required
									name="confirmPassword"
									value={data.confirmPassword}
									className="w-full  bg-slate-200 h-full px-2 py-1 rounded focus:outline-blue-600"
								/>
								{data.confirmPassword.length > 0 && (
									<div
										className="absolute right-1 text-xl top-[50%] translate-y-[-50%]
										"
									>
										{!showConfirmPassword ? (
											<button
												type="button"
												onClick={() =>
													setShowConfirmPassword(
														!showConfirmPassword
													)
												}
												className="flex justify-center items-center"
											>
												<AiOutlineEyeInvisible />
											</button>
										) : (
											<button
												type="button"
												className="flex justify-center items-center"
												onClick={() =>
													setShowConfirmPassword(
														!showConfirmPassword
													)
												}
											>
												<AiOutlineEye />
											</button>
										)}
									</div>
								)}
							</div>
						</div>

						{passwordError && (
							<p className="text-xs  text-red-700">
								Password did not match.Please check your password.
							</p>
						)}
						<button
							type="submit"
							disabled={loading ? true : false}
							className="bg-red-600 disabled:bg-red-900  self-end mt-10 px-6 text-white py-2 rounded-md uppercase hover:bg-red-700"
						>
							Sign up
						</button>
						<p className="text-sm self-end mt-4">
							Aready have account?{" "}
							<Link to="/login" className="text-red-600 underline">
								Login
							</Link>
							{"."}
						</p>
					</form>
				</div>
			</div>
		</>
	);
};

export default Signup;
