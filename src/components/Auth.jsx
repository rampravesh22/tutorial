import React, { useState } from "react";
import supabase from "../supabaseClient";

const Auth = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const res = await supabase.auth.signInWithPassword({ email });
			setLoading(false);
			console.log(res);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};
	return (
		<div>
			<div className="bg-grey-lighter min-h-screen flex flex-col">
				<div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
					<form
						onSubmit={handleLoginSubmit}
						className="bg-white px-6 py-8 rounded shadow-md text-black w-full"
					>
						<h1 className="mb-8 text-3xl text-center">Login</h1>

						<input
							type="text"
							className="block border border-gray-200  w-full p-3 rounded mb-4"
							name="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>

						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="block border border-gray-200 w-full p-3 rounded mb-4"
							name="password"
							placeholder="Password"
						/>

						<button
							type="submit"
							className="w-full text-center py-2 rounded bg-green-500 text-white hover:bg-green-dark flex justify-center focus:outline-none my-1"
						>
							{loading ? (
								<span className="w-6 block h-6 rounded-full animate-spin border border-e-2 border-e-black"></span>
							) : (
								"Login"
							)}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Auth;
