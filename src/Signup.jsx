import React, { useState } from "react";
import supabase from "./supabaseClient";
const Signup = () => {
	const [loading, setLoading] = useState(false);
	const [inputs, setInputs] = useState({
		email: "",
		password: "ram1752",
	});
	const handleChangeInput = (e) => {
		setInputs((preState) => {
			return { ...preState, [e.target.name]: e.target.value };
		});
	};

	const handleSignUp = async (e) => {
		e.preventDefault();
		setLoading(true);
		const { data, error } = await supabase.auth.signUp(inputs);
		if (error) {
			console.log(error);
			setLoading(false);
		} else {
			console.log(data);
			setLoading(false);
		}
	};

	return (
		<div className="flex justify-center mt-10">
			<form
				onSubmit={handleSignUp}
				action=""
				className="max-w-[500px] gap-5 w-[80%] flex justify-center flex-col"
			>
				<input
					type="email"
					name="email"
					className="border bßorder-black h-10 px-2 w-full rounded-md"
					placeholder="email"
					required
					value={inputs.email}
					onChange={handleChangeInput}
				/>
				<input
					type="password"
					placeholder="password"
					value={inputs.password}
					required
					name="password"
					onChange={handleChangeInput}
					className="border border-black h-10 px-2 w-full rounded-md"
				/>
				<button className="bg-zinc-600 justify-center gap-3 items-center flex text-white  px-6 py-2 rounded-md">
					{loading && (
						<span className="size-5 rounded-full animate-spin border-2 border-e-black f"></span>
					)}
					Sign up
				</button>
			</form>
		</div>
	);
};

export default Signup;
