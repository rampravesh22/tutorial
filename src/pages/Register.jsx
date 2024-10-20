import React, { useState } from "react";
import { Button, Input, Link } from "@nextui-org/react";
import { Link as RLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../actions/authActions";
import { motion } from "framer-motion";
import { Mail, Lock, User } from "lucide-react";
import toast from "react-hot-toast";

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	const handleUserRegister = async (e) => {
		e.preventDefault();
		try {
			await dispatch(register({ name, email, password }));
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
					onSubmit={handleUserRegister}
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
								Create Account
							</motion.h2>
							<p className="text-gray-500 mt-2">Join us today</p>
						</div>

						<motion.div
							className="space-y-4"
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.4 }}
						>
							<Input
								type="text"
								label="Name"
								placeholder="Enter your name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								endContent={<User className="text-gray-400" size={20} />}
								variant="bordered"
								classNames={{
									input: "text-sm",
									inputWrapper: "border-gray-300 hover:border-blue-500",
								}}
							/>

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
								placeholder="Choose a password"
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
								Create account
							</Button>
						</motion.div>

						<motion.div
							className="text-center text-sm"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.7 }}
						>
							Already have an account?{" "}
							<Link
								as={RLink}
								to="/login"
								className="text-blue-600 hover:text-blue-700 font-medium"
								showAnchorIcon
							>
								Sign in
							</Link>
						</motion.div>
					</motion.div>
				</motion.form>
			</motion.div>
		</div>
	);
};

export default Register;
