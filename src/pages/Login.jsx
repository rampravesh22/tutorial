import React, { useState } from "react";
import { Button, Input, Link } from "@nextui-org/react";
import { Link as RLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";
import { login } from "../actions/authActions";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		try {
			await dispatch(login({ email, password }));
		} finally {
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex justify-center items-center p-4">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="w-full max-w-md"
			>
				<motion.form
					onSubmit={handleLoginSubmit}
					className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20"
					whileHover={{ scale: 1.01 }}
					transition={{ type: "spring", stiffness: 300 }}
				>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
						className="space-y-6"
					>
						<div className="text-center">
							<motion.h2
								className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
								initial={{ scale: 0.5 }}
								animate={{ scale: 1 }}
								transition={{ type: "spring", stiffness: 500, delay: 0.3 }}
							>
								Welcome Back
							</motion.h2>
							<p className="text-gray-500 mt-2">Sign in to your account</p>
						</div>

						<motion.div
							className="space-y-4"
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.4 }}
						>
							<Input
								type="email"
								label="Email"
								placeholder="Enter your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								endContent={<Mail className="text-gray-400" size={20} />}
								variant="bordered"
								classNames={{
									input: "text-sm",
									inputWrapper: "border-gray-300 hover:border-blue-500",
								}}
							/>

							<Input
								type="password"
								label="Password"
								placeholder="Enter your password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								endContent={<Lock className="text-gray-400" size={20} />}
								variant="bordered"
								classNames={{
									input: "text-sm",
									inputWrapper: "border-gray-300 hover:border-blue-500",
								}}
							/>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
						>
							<Button
								type="submit"
								color="primary"
								className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
								size="lg"
							>
								Sign in
							</Button>
						</motion.div>

						<motion.div
							className="text-center text-sm"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.7 }}
						>
							Don&apos;t have an account?{" "}
							<Link
								as={RLink}
								to="/register"
								className="text-blue-600 hover:text-blue-700 font-medium"
								showAnchorIcon
							>
								Create account
							</Link>
						</motion.div>
					</motion.div>
				</motion.form>
			</motion.div>
		</div>
	);
};

export default Login;
