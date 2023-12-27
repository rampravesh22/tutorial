import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import React, { useState } from "react";
import loginSignUpImage from "../assets/login-animation.gif";
const Signup = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [inputs, setInputs] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const hanldeInputChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setInputs((preState) => {
			return { ...inputs, [name]: value };
		});
	};
	return (
		<div className="p-3 md:p-4">
			<div className="w-full max-w-md bg-white m-auto flex justify-center items-center flex-col p-4">
				{/* <h1 className="text-center text-2xl font-bold">Sign up</h1> */}
				<div className="w-20 overflow-hidden shadow-md rounded-full drop-shadow-md">
					<img src={loginSignUpImage} className="w-full" alt="" />
				</div>
				<form action="" className="w-full py-3">
					<div>
						<label htmlFor="firstName">First Name</label>
						<input
							type="text"
							id="firstName"
							name="firstName"
							value={inputs.firstName}
							onChange={hanldeInputChange}
							className="w-full mt-1 bg-slate-200 px-2 py-1 rounded"
						/>
					</div>
					<div className="mt-5">
						<label htmlFor="lastName">Last Name</label>
						<input
							type="text"
							onChange={hanldeInputChange}
							id="lastName"
							value={inputs.lastName}
							name="lastName"
							className="w-full mt-1 bg-slate-200 px-2 py-1 rounded"
						/>
					</div>
					<div className="mt-5">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							onChange={hanldeInputChange}
							name="email"
							value={inputs.email}
							className="w-full mt-1 bg-slate-200 px-2 py-1 rounded"
						/>
					</div>
					<div className="mt-5 relative">
						<label htmlFor="password">Password</label>

						<div className="w-full relative ">
							<input
								type={showPassword ? "text" : "password"}
								id="password"
								onChange={hanldeInputChange}
								name="password"
								value={inputs.password}
								className="w-full mt-1 bg-slate-200 px-2 py-1 rounded"
							/>
							{inputs.password.length > 1 && (
								<div
									className="absolute right-1 text-xl top-[50%] translate-y-[-50%]
                     "
								>
									{showPassword ? (
										<button
											type="button"
											onClick={() => setShowPassword(!showPassword)}
											className="flex justify-center items-center"
										>
											<AiOutlineEyeInvisible />
										</button>
									) : (
										<button
											type="button"
											className="flex justify-center items-center"
											onClick={() => setShowPassword(!showPassword)}
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

						<div className="w-full relative ">
							<input
								type={showPassword ? "text" : "password"}
								id="confirmPassword"
								onChange={hanldeInputChange}
								name="confirmPassword"
								value={inputs.confirmPassword}
								className="w-full mt-1 bg-slate-200 px-2 py-1 rounded"
							/>
							<div
								className="absolute right-1 text-xl top-[50%] translate-y-[-50%]
                     "
							>
								{showPassword ? (
									<button
										type="button"
										onClick={() => setShowPassword(!showPassword)}
										className="flex justify-center items-center"
									>
										<AiOutlineEyeInvisible />
									</button>
								) : (
									<button
										type="button"
										className="flex justify-center items-center"
										onClick={() => setShowPassword(!showPassword)}
									>
										<AiOutlineEye />
									</button>
								)}
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
