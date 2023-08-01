import React from "react";
import { Link, NavLink } from "react-router-dom";

const Register = () => {
	return (
		<div className="h-screen flex justify-center items-center">
			<div className="md:w-[30rem] md:h-[34rem] sm:w-[30rem] w-[100%]  md:shadow-lg flex flex-col  p-12 sm:border-4 rounded-md">
				<h1 className="text-3xl self-start font-bold opacity-70">
					Create Account
				</h1>
				<form action="" className="mt-8">
					<div className="flex flex-col">
						<label htmlFor="email" className="text-xl">
							Your email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="name@email.com"
							className="border-2 px-2 py-1.5 rounded-md focus:outline-rose-600"
						/>
					</div>
					<div className="flex flex-col mt-6">
						<label htmlFor="email" className="text-xl">
							Password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="password"
							className="border-2 px-2 py-1.5 rounded-md focus:outline-rose-600"
						/>
					</div>
					<div className="flex flex-col mt-6">
						<label htmlFor="email" className="text-xl">
							Confirm password
						</label>
						<input
							type="password"
							name="confirm-password"
							id="confirm-password"
							placeholder="confirm password"
							className="border-2 px-2 py-1.5 rounded-md focus:outline-rose-600"
						/>
					</div>
					<div className="mt-2">
						<input
							type="checkbox"
							id="terms-and-conditions"
							placeholder="confirm password"
							className="border-2 px-2 py-1.5 font-extralight accent-rose-600 mr-4 h-4 w-4 text-lg"
						/>
						<label htmlFor="email" className="text-xl">
							I accept terms and condition.
						</label>
					</div>
					<button
						type="submit"
						className="bg-rose-600 w-full text-white mt-3 py-2 rounded-lg"
					>
						Create an account
					</button>
					<div className="mt-3">
						<span>Already have an account? </span>
						<Link className="text-rose-600" to="/login">
							Login here
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
