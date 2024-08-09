import React, { useState } from "react";
import supabase from "./supabaseClient";
const Signin = () => {
	const [loading, setLoading] = useState(false);

	const [inputs, setInputs] = useState({
		email: "rpc7863@gmail.com",
		password: "chetan1752",
	});
	const handleChangeInput = (e) => {
		setInputs((preState) => {
			return { ...preState, [e.target.name]: e.target.value };
		});
	};

	const handleSignUp = async (e) => {
		e.preventDefault();
		setLoading(true);
		const { data, error } = await supabase.auth.signInWithPassword(inputs);
		setLoading(false);
		if (error) {
			console.log(error);
		} else {
			// console.log(data.session.access_token);
			localStorage.setItem("supabaseToken", data.session.access_token);
		}
	};

	return (
		<div className="flex  justify-center mt-10">
			<form
				onSubmit={handleSignUp}
				action=""
				className="max-w-[500px] gap-5 w-[80%] flex justify-center flex-col"
			>
				<input
					type="email"
					name="email"
					required
					className="border border-black h-10 px-2 w-full rounded-md"
					placeholder="email"
					value={inputs.email}
					onChange={handleChangeInput}
				/>
				<input
					type="password"
					placeholder="password"
					value={inputs.password}
					name="password"
					required
					onChange={handleChangeInput}
					className="border border-black h-10 px-2 w-full rounded-md"
				/>
				<button className="bg-blue-600 justify-center gap-3 items-center flex text-white  px-6 py-2 rounded-md">
					{loading && (
						<span className="size-5 rounded-full animate-spin border-2 border-e-black f"></span>
					)}
					Sign In
				</button>
			</form>
		</div>
	);
};

export default Signin;
