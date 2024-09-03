import React, { useEffect, useState } from "react";
import { Button, Input, Link } from "@nextui-org/react";
import { supabase } from "../../supabaseClient";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import toastM from "../../toast/toastMessage";
const Login = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const [isVisible, setIsVisible] = useState(false);
	const toggleVisibility = () => setIsVisible(!isVisible);
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState(
		JSON.parse(localStorage.getItem("formData"))
	);
	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const { data, error } = await supabase.auth.signInWithPassword({
				email: formData.email,
				password: formData.password,
			});
			if (error) {
				toastM.error(error.message);
			} else {
				localStorage.setItem("token", data.session.access_token);
				navigate("/dashboard");
				toastM.success("Loging in successful.");
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const handleInputChange = (e) => {
		setFormData((preState) => {
			return { ...preState, [e.target.name]: e.target.value };
		});
	};
	return (
		<div className="flex justify-center items-center h-screen">
			<form
				onSubmit={handleLoginSubmit}
				action=""
				method="post"
				className="max-w-lg h-[380px]  shadow-slate-300  bg-white border shadow-lg  p-7 rounded-md w-[75%]"
			>
				<div className="text-center text-3xl mb-10">Login</div>
				<Input
					type="text"
					errorMessage="this is not correct"
					label="Email"
					value={formData.email}
					onChange={handleInputChange}
					name="email"
				/>
				<Input
					type={isVisible ? "text" : "password"}
					errorMessage="this is not correct"
					label="Password"
					value={formData.password}
					name="password"
					onChange={handleInputChange}
					className="mt-6"
					endContent={
						<button
							type="button"
							className="focus:outline-none"
							onClick={toggleVisibility}
						>
							{isVisible ? (
								<BsEyeSlashFill className="text-2xl text-default-400 pointer-events-none" />
							) : (
								<BsEyeFill className="text-2xl text-default-400 pointer-events-none" />
							)}
						</button>
					}
				/>
				<Button
					type="submit"
					className="w-full mt-6"
					variant="solid"
					color="primary"
					isLoading={loading}
				>
					Login
				</Button>
				<p className="text-gray-600 px-1 text-sm mt-2">
					Don&apos;t have an account?{" "}
					<Link as={NavLink} className="text-sm" to="/register">
						Register
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Login;
