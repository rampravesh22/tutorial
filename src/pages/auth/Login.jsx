import React from "react";

const Login = () => {
	const handleClick = async (pageNumber) => {
		console.log("pageNumber: ", pageNumber);
	};
	return (
		<div className="bg-neutral-600 text-white text-3xl py-5  text-center box-border">
			Login page
		</div>
	);
};

export default Login;
