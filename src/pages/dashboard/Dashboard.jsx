import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { useGlobalContext } from "../../context/useGlobalContext";
import { Link, useNavigate } from "react-router-dom";
import toastM from "../../toast/toastMessage";

const Dashboard = () => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const { logout } = useGlobalContext();
	const handleLogout = () => {
		setLoading(true);
		setTimeout(() => {
			logout();
			navigate("/login");
			setLoading(false);
			toastM.success("Logout success.");
		}, 1000);
	};
	return (
		<div className="flex w-full   flex-col items-end    h-full  ">
			<nav className="flex self-end  px-2  items- mt-2">
				<Button
					className="ring ring-slate-400"
					onClick={handleLogout}
					isLoading={loading}
					color="danger"
				>
					Logout
				</Button>
			</nav>
			<div className="self-center flex flex-col gap-5 mt-40">
				<Button as={Link} to="/resume" color="secondary">
					View Resume
				</Button>
				<Button as={Link} color="warning" to={"/create-resume"}>
					Create Resume
				</Button>
				<Button color="primary">Edit Resume</Button>
			</div>
		</div>
	);
};

export default Dashboard;
