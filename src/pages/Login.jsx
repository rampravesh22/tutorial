import React from "react";
import blob from "../images/blob.svg";
const Login = () => {
	return (
		<div className="login-wrapper h-full flex justify-center items-center">
			<form
				action=""
				className="border-2 w-[60%] relative flex flex-col justify-center  max-w-[400px] transition-all p-16 h-[500px] shadow hover:shadow-lg shadow-red-600 hover:shadow-red-800  overflow-hidden   rounded-md"
			>
				<div>
					<h1 className="bg-blue-900 text-xl z-20 text-white text-center py-4 mb-10">
						Welcome here
					</h1>
				</div>
				<div className="absolute -top-[20rem] -right-32 -z-20  w-[30rem]">
					<img src={blob} alt="" />
				</div>
				<div className="form-field flex flex-col">
					<label htmlFor="username" className="text-lg">
						Username
					</label>
					<input
						type="text"
						id="username"
						className="border border-black h-10 rounded-md px-2"
					/>
				</div>
				<div className="form-field flex flex-col mt-3">
					<label htmlFor="password" className="text-lg">
						Password
					</label>
					<input
						type="password"
						id="password"
						className="border border-black h-10 rounded-md px-2"
					/>
				</div>
				<button
					type="submit"
					className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 mt-5 rounded-md"
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
