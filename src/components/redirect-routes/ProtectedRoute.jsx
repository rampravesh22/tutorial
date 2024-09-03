import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (!localStorage.getItem("token")) {
			return navigate("/login");
		}
	}, [navigate]);

	return children;
};

export default ProtectedRoute;
