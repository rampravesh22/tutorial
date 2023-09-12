import React from "react";

const Login = () => {
	return (
		<div className="flex flex-col md:flex-row h-screen gap-12 md:gap-0 justify-center bg-[#f0f2f5] justify-center items-center">
			<div className="left w-[80%] md:w-[40%]  md:text-left text-center">
				<h1 className="text-[#1877f2] text-6xl font-semibold">facebook</h1>
				<p className="text-3xl">
					Facebook helps you connect and share with the people in your
					life.
				</p>
			</div>
			<div className="right  w-[100%] md:w-[40%] gap-4 md:h-[40rem] flex flex-col items-center justify-center">
				<div className="wrapper bg-white w-[70%] shadow-xl border-2 rounded-lg">
					<form action="" className="flex flex-col p-6 gap-4 items-center">
						<input
							type="text"
							placeholder="Email address or phone number"
							className="h-12 w-full rounded-md px-4 text-lg border border-slate-200  focus:outline-none focus:border-[#1877f2]"
						/>
						<input
							type="password"
							placeholder="Password"
							className="h-12 w-full rounded-md px-4 text-lg border border-slate-200  focus:outline-none focus:border-[#1877f2]"
						/>
						<button className="bg-[#1877f2] w-full text-xl text-white h-12 rounded-md">
							Log in
						</button>
						<a href="" className="text-[#1877f2] hover:underline">
							Forgot password?
						</a>
						<hr />
						<a
							href=""
							className="bg-[#42b72a] px-7 text-white tex-3xl py-2 rounded-md"
						>
							Create a new account
						</a>
					</form>
				</div>
				<div>
					<a href="" className="text-black hover:underline font-semibold">
						Create a page{" "}
					</a>
					for celebrity brand or business
				</div>
			</div>
		</div>
	);
};

export default Login;
