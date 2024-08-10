import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "./ContextProvider";

const NavBar = () => {
	const { session, setSession } = useContext(GlobalContext);
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem("supabaseToken");
		setSession(null);
		if (!session) {
			navigate("/");
		}
	};
	return (
		<div className="bg-slate-700 items-center flex justify-between text-white px-2 py-3">
			<div>Dashboard</div>
			<button
				type="button"
				onClick={handleLogout}
				className="bg-red-700 hover:bg-red-800 px-6 py-1 rounded-md"
			>
				Logout
			</button>
		</div>
	);
};

export default NavBar;
