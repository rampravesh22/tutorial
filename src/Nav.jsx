import React, { useState } from "react";
import { useAsyncError } from "react-router-dom";
import Login from "./pages/Login";

const Nav = () => {
	const [loginModal, setLoginModal] = useState(false);
	const [registerModal, setRegisterModal] = useState(false);
	return (
		<div className="flex justify-between px-8 bg-gray-800 text-white items-center">
			<div className="font-bold text-4xl">
				<span className="">Todo</span>
			</div>
			<nav>
				<ul className="flex items-center py-5 gap-3 uppercase">
					<button
						onClick={() => setLoginModal(true)}
						className=" px-4 rounded-md hover:bg-gray-900 transition-all py-1"
					>
						Login
					</button>
					<button className=" px-4 rounded-md hover:bg-gray-900 transition-all py-1">
						Register
					</button>
					<button className="bg-red-500 px-4 hover:bg-red-600 rounded-md py-1">
						Logout
					</button>
				</ul>
			</nav>
			<Login loginModal={loginModal} setLoginModal={setLoginModal} />
		</div>
	);
};

export default Nav;
