import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RedirectIfAuthenticated = ({ children }) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem("token")) {
			navigate("/dashboard");
		}
	}, [navigate]);

	return children;
};

export default RedirectIfAuthenticated;
