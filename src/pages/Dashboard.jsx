import React from "react";
import { Link } from "@nextui-org/react";
import { Link as Rlink } from "react-router-dom";

const Dashboard = () => {
	return (
		<div className="h-full flex justify-center items-center p-10">
			<div className="border border-gray-200 bg-white flex flex-col p-10 gap-6 shadow-lg rounded-lg transition-transform transform  duration-300">
				<h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
					Incident Management
				</h2>
				<Link
					as={Rlink}
					to="/create-incident"
					className="px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out text-center"
				>
					Create a New Incident
				</Link>
				<Link
					as={Rlink}
					to="/view-incidents"
					className="px-6 py-3 bg-gray-100 text-gray-800 font-medium text-lg rounded-md shadow-md hover:bg-gray-200 hover:shadow-lg transition duration-300 ease-in-out text-center"
				>
					View Open Incidents
				</Link>
			</div>
		</div>
	);
};

export default Dashboard;
