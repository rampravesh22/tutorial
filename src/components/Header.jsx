import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/authActions";

const Header = () => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
	};
	return (
		<div className="bg-gray-900 items-center px-10 flex justify-between text-white py-2 text-center text-3xl">
			<div>Todo App</div>
			<div className="text-base flex gap-3">
				{!isAuthenticated ? (
					<>
						<Link to="/register">Register</Link>
						<Link to="/login">Login</Link>
					</>
				) : (
					<>
						<Link to="/add-todo">Add Todo</Link>
						<button onClick={handleLogout}>Logout</button>
					</>
				)}
			</div>
		</div>
	);
};

export default Header;
