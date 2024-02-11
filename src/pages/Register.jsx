import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import supabase from "../supabaseClient";

const Register = ({ setRegisterModal, registerModal }) => {
	const [passwordMatch, setPasswordMatch] = useState(false);
	const [formData, setFormData] = useState({
		registerName: "Rampravesh Chaudhari",
		registerEmail: "rpc7863@gmail.com",
		registerPassword: "ram123",
		registerConfirmPassword: "ram123",
	});

	const handleFormChange = (e) => {
		setFormData((presState) => ({
			...presState,
			[e.target.name]: e.target.value,
		}));
	};
	const handleRegisterSubmit = async (e) => {
		e.preventDefault();
		if (formData.registerPassword !== formData.registerConfirmPassword) {
			setPasswordMatch(true);
		} else {
			try {
				const { data, error } = await supabase.auth.signUp({
					email: formData.registerEmail,
					password: formData.registerPassword,
				});
				console.log(data.user);
				console.log(error);
			} catch (error) {
				console.log(error);
			}
		}
	};
	return (
		<div
			onClick={(e) => {
				setRegisterModal(
					!(e.target === document.getElementById("registerModalContainer"))
				);
			}}
			id="registerModalContainer"
			className={`fixed inset-0 bg-[rgba(0,0,0,.5)] flex justify-center items-center  z-40  ${
				registerModal ? "scale-100" : "scale-0"
			} `}
		>
			<div
				className={`min-h-[550px] bg-gray-900 relative text-white  w-[500px] p-10 rounded-md ${
					registerModal ? "scale-100" : "scale-90"
				}  z-50 transition `}
			>
				<h1 className="text-3xl py-2  text-center rounded-md">
					Please Register Here
				</h1>
				<button
					className="absolute -right-6 -top-6"
					onClick={(e) => {
						e.stopPropagation();
						setRegisterModal(false);
					}}
				>
					<AiOutlineClose className="text-2xl" />
				</button>
				<form
					onSubmit={handleRegisterSubmit}
					action=""
					className="mt-4 gap-4 flex-col flex items-center "
				>
					<div className="w-full">
						<label htmlFor="name" className=" text-xl">
							Name
						</label>
						<input
							type="text"
							id="registerName"
							name="registerName"
							className="border-gray-400 text-black px-2  rounded-md border w-full h-10 text-sm "
							onChange={handleFormChange}
							placeholder="Name"
							value={formData.registerName}
						/>
					</div>
					<div className="w-full">
						<label htmlFor="registerEmail" className=" text-xl">
							Email
						</label>
						<input
							type="email"
							id="registerEmail"
							name="registerEmail"
							onChange={handleFormChange}
							placeholder="Email"
							value={formData.registerEmail}
							className="w-full h-10 text-sm text-black border-gray-400 px-2 rounded-md border "
						/>
					</div>
					<div className="w-full">
						<label
							htmlFor="password"
							id="registerPassword"
							className=" text-xl"
						>
							Password
						</label>
						<input
							type="password"
							id="registerPassword"
							name="registerPassword"
							onChange={handleFormChange}
							placeholder="Password"
							className="w-full h-10 text-sm text-black  border-gray-400 px-2 rounded-md border "
							value={formData.registerPassword}
						/>
					</div>
					<div className="w-full">
						<label className=" text-xl" htmlFor="registerConfirmPassword">
							Confirm Password
						</label>
						<input
							type="password"
							id="registerConfirmPassword"
							name="registerConfirmPassword"
							onChange={handleFormChange}
							placeholder="Confirm Password"
							className="w-full h-10 text-sm text-black border-gray-400 px-2 rounded-md border "
							value={formData.registerConfirmPassword}
						/>
					</div>
					<button
						onClick={(e) => e.stopPropagation()}
						type="submit"
						className="bg-emerald-600 mt-10 hover:bg-emerald-700 self-center py-2 rounded-md w-[300px] text-white"
					>
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
