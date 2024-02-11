import React, { useContext, useEffect } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { GlobalContext } from "./ContextProvider";

const Nav = () => {
	const {
		loginModal,
		token,
		setToken,
		setLoginModal,
		registerModal,
		setRegisterModal,
	} = useContext(GlobalContext);
	useEffect(() => {
		document.body.style.overflow =
			loginModal || registerModal ? "hidden" : "auto";
	}, [loginModal, registerModal]);
	return (
		<div className="flex justify-between px-8 bg-gray-800 text-white items-center">
			<div className="font-bold text-4xl">
				<span className="">Todo</span>
			</div>
			<nav>
				<ul className="flex items-center py-5 gap-3 uppercase">
					{!token ? (
						<>
							<button
								type="button"
								onClick={() => setLoginModal(true)}
								className=" px-4 rounded-md hover:bg-gray-900 transition-all py-1"
							>
								Login
							</button>
							<button
								type="button"
								onClick={() => setRegisterModal(true)}
								className=" px-4 rounded-md hover:bg-gray-900 transition-all py-1"
							>
								Register
							</button>
						</>
					) : (
						<button
							onClick={() => {
								localStorage.removeItem("token");
								setToken(null);
							}}
							type="button"
							className="bg-red-500 px-4 hover:bg-red-600 rounded-md py-1"
						>
							Logout
						</button>
					)}
				</ul>
			</nav>
			<Login loginModal={loginModal} setLoginModal={setLoginModal} />
			<Register
				registerModal={registerModal}
				setRegisterModal={setRegisterModal}
			/>
		</div>
	);
};

export default Nav;
