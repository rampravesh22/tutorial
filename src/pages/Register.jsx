import React, { useEffect, useState } from "react";

const Register = ({ setRegisterModal, registerModal }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	useEffect(() => {
		document.body.style.overflow = registerModal ? "hidden" : "auto";
	});

	const handleFormChange = (e) => {
		setFormData((presState) => ({
			...presState,
			[e.target.name]: e.target.value,
		}));
	};
	return null;
	// <div
	// 	className={`fixed inset-0 bg-black bg-[rgba(0,0,0,.5)] flex justify-center items-center  z-40  ${
	// 		registerModal ? "scale-100" : "scale-0"
	// 	} `}
	// >
	// 	<div
	// 		className={`h-[550px] w-[550px] p-4 rounded-md ${
	// 			registerModal ? "scale-100" : "scale-90"
	// 		} bg-white z-50 transition `}
	// 	>
	// 		<h1 className="bg-blue-600 py-2 text-2xl text-center rounded-md">
	// 			Please Register Here
	// 		</h1>
	// 		<form action="" className="mt-4 gap-4 flex-col flex items-center ">
	// 			<div className="w-full">
	// 				<label htmlFor="name" className="text-black text-xl">
	// 					Name
	// 				</label>
	// 				<input
	// 					type="text"
	// 					id="name"
	// 					name="name"
	// 					className="border-gray-400 px-2 text-black rounded-md border w-full text-xl "
	// 					onChange={handleFormChange}
	// 					value={formData.name}
	// 				/>
	// 			</div>
	// 			<div className="w-full">
	// 				<label htmlFor="email" className="text-black text-xl">
	// 					Email
	// 				</label>
	// 				<input
	// 					type="email"
	// 					id="email"
	// 					name="email"
	// 					onChange={handleFormChange}
	// 					value={formData.email}
	// 					className="w-full text-black  border-gray-400 px-2 rounded-md border text-xl"
	// 				/>
	// 			</div>
	// 			<div className="w-full">
	// 				<label htmlFor="password" className="text-black text-xl">
	// 					Password
	// 				</label>
	// 				<input
	// 					type="password"
	// 					id="password"
	// 					name="password"
	// 					onChange={handleFormChange}
	// 					className="w-full text-black  border-gray-400 px-2 rounded-md border text-xl"
	// 					value={formData.password}
	// 				/>
	// 			</div>
	// 			<div className="w-full">
	// 				<label
	// 					className="text-black text-xl"
	// 					htmlFor="confirmPassword"
	// 				>
	// 					Confirm Password
	// 				</label>
	// 				<input
	// 					type="password"
	// 					id="confirmPassword"
	// 					name="confirmPasword"
	// 					onChange={handleFormChange}
	// 					className="w-full text-black  border-gray-400 px-2 rounded-md border text-lg"
	// 					value={formData.confirmPassword}
	// 				/>
	// 			</div>
	// 		</form>
	// 	</div>
	// </div>
};

export default Register;
