import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import loginSignUpImage from "../assets/login-animation.gif";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../app/userSlice";
const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const userData = useSelector((state) => state.user.userData);
	console.log(userData);
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const [data, setData] = useState({
		email: "ram1@gmail.com",
		password: "ram123",
	});

	const hanldeInputChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setData((preState) => {
			return { ...preState, [name]: value };
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const toastId = toast.loading("Please wait, Signing in.");
		try {
			const serverRes = await axios.post(
				"http://localhost:3000/user/login",
				data
			);

			toast.dismiss(toastId);
			if (serverRes?.data?.success) {
				toast.success("Login sucessful");
				dispatch(login(serverRes.data.userData));
				navigate("/");
			} else {
				toast.error("User with this email does not exist. Please sign up.");
			}
			setLoading(false);
		} catch (error) {
			setTimeout(() => {
				setLoading(false);
				toast.dismiss(toastId);
				toast.error("Something went wrong.");
			}, 1000);
		}
	};

	return (
		<div className="p-3 md:p-4 h-full flex justify-center items-center">
			<div className="w-full max-w-md rounded bg-white m-auto flex justify-center items-center flex-col p-4">
				<h1 className="text-center text-xl shadow-inner py-2 text-white mb-2 bg-red-600 w-full">
					Login here
				</h1>
				<div className="w-20 overflow-hidden shadow-md rounded-full drop-shadow-md">
					<img src={loginSignUpImage} className="w-full" alt="" />
				</div>
				<form
					action=""
					onSubmit={handleSubmit}
					className="w-full py-3 flex flex-col"
					method="post"
				>
					<div className="mt-5">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							required
							onChange={hanldeInputChange}
							name="email"
							value={data.email}
							autoComplete="off"
							className="w-full mt-1 bg-slate-200 px-2 py-1 rounded focus:outline-blue-600"
						/>
					</div>

					<div className="mt-5 relative">
						<label htmlFor="password">Password</label>

						<div className="w-full relative  border">
							<input
								type={showPassword ? "text" : "password"}
								id="password"
								onChange={hanldeInputChange}
								required
								name="password"
								value={data.password}
								className="w-full  bg-slate-200 h-full px-2 py-1 rounded focus:outline-blue-600"
							/>
							{data.password.length > 0 && (
								<div
									className="absolute right-1 text-xl top-[50%] translate-y-[-50%]
                     "
								>
									{!showPassword ? (
										<button
											type="button"
											onClick={() => setShowPassword(!showPassword)}
											className="flex justify-center items-center"
										>
											<AiOutlineEyeInvisible />
										</button>
									) : (
										<button
											type="button"
											className="flex justify-center items-center"
											onClick={() => setShowPassword(!showPassword)}
										>
											<AiOutlineEye />
										</button>
									)}
								</div>
							)}
						</div>
					</div>

					<button
						type="submit"
						disabled={loading ? true : false}
						className="bg-red-600 mt-10 px-6 self-end text-white py-2 rounded-md uppercase hover:bg-red-700"
					>
						Login
					</button>
					<p className="text-sm mt-4 self-end">
						Don&apos;t have account?{" "}
						<Link to="/signup" className="text-red-600 underline">
							Sign up
						</Link>
						{"."}
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
