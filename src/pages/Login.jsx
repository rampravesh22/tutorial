import React, { useEffect, useState } from "react";

const Login = ({ setLoginModal, loginModal }) => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	useEffect(() => {
		document.body.style.overflow = loginModal ? "hidden" : "auto";
	}, [loginModal]);

	const handleFormChange = (e) => {
		setFormData((presState) => ({
			...presState,
			[e.target.name]: e.target.value,
		}));
	};
	return (
		<div
			onClick={(e) =>
				setLoginModal(!(e.target === document.getElementById("loginModal")))
			}
			id="loginModal"
			className={`fixed inset-0 bg-black bg-[rgba(0,0,0,.7)] flex justify-center items-center  z-40  ${
				loginModal ? "scale-100" : "scale-0"
			} `}
		>
			<div
				className={`h-[500px] bg-gradient-to-r text-white from-cyan-600 to-blue-800 w-[500px]  flex flex-col justify-evenly p-10 rounded-md ${
					loginModal ? "scale-100" : "scale-90"
				} bg-white z-50 transition `}
			>
				<h1 className="text-white font-bold  py-2 text-4xl text-center rounded-md">
					Please Login Here
				</h1>
				<form action="" className="mt-4 gap-4 flex-col flex items-center ">
					<div className="w-full">
						<label htmlFor="email" className="text-black text-xl">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							onChange={handleFormChange}
							placeholder="Email"
							value={formData.email}
							className="w-full text-black placeholder:text-sm h-10  border-gray-400 px-2 rounded-md border text-xl"
						/>
					</div>
					<div className="w-full">
						<label htmlFor="password" className="text-black text-xl">
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="Password"
							onChange={handleFormChange}
							className="w-full text-black  placeholder:text-sm h-10 border-gray-400 px-2 rounded-md border text-xl"
							value={formData.password}
						/>
					</div>
					<button
						className="bg-emerald-600 hover:bg-emerald-700 self-center py-2 rounded-md w-[150px] text-white"
						onClick={(e) => {
							e.stopPropagation();
						}}
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
