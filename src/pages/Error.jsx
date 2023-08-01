import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
	const navigate = useNavigate();
	return (
		<div className="min-h-[68vh] flex justify-center items-center">
			<div className=" flex flex-col justify-center items-center space-y-3">
				<h1 className="font-bold text-3xl">Page not found</h1>
				<div>
					<p>
						The page you are looking for doesn't exist. Here are some
						helpful links:
					</p>
				</div>
				<div className="flex justify-center gap-3">
					<button
						className="border-2 px-5 py-2 rounded-md hover:bg-slate-200 transition-all duration-150"
						onClick={() => navigate(-1)}
					>
						<span>←</span> Go Back
					</button>
					<button
						className="bg-slate-800 px-5 py-2 rounded-md hover:bg-slate-900 text-white"
						onClick={() => navigate("/")}
					>
						Take me home
					</button>
				</div>
			</div>
		</div>
	);
};

export default Error;
