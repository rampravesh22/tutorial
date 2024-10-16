import React, { useContext, useEffect, useState } from "react";
import { IncidentContext } from "../context/IncidentContext";

const CreateIncident = () => {
	const { setIncidents, incidents } = useContext(IncidentContext);
	const [data, setData] = useState;

	const [title, setTitle] = useState("new incident");
	const [description, setDescription] = useState(
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi reiciendis, nobis labore, eligendi quidem atque inventore consequatur, molestias facilis voluptas voluptatum id iusto. Reprehenderit corrupti repellendus provident, soluta alias rerum!"
	);
	const [priority, setPriority] = useState("Low");
	const [incidentStatus, setIncidentStatus] = useState("open");

	const handleSubmit = (e) => {
		e.preventDefault();
		const incidentData = {
			id: Date.now(),
			title,
			description,
			priority,
			incidentDate: new Date(),
			incidentStatus,
		};

		setIncidents((prevState) => [incidentData, ...prevState]);
		setTimeout(() => {}, []);
	};

	useEffect(() => {
		localStorage.setItem("incidents", JSON.stringify(incidents));
	}, [incidents]);

	return (
		<div className="h-full flex justify-center my-10 items-center bg-gray-100 p-6">
			<div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
				<h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
					Create New Incident
				</h2>
				<form onSubmit={handleSubmit} className="space-y-4">
					{/* Title */}
					<div>
						<label className="block text-gray-600 mb-2" htmlFor="title">
							Incident Title
						</label>
						<input
							type="text"
							id="title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Enter incident title"
							required
						/>
					</div>

					{/* Description */}
					<div>
						<label className="block text-gray-600 mb-2" htmlFor="description">
							Description
						</label>
						<textarea
							id="description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Describe the incident"
							rows="4"
							required
						/>
					</div>

					{/* Priority */}
					<div>
						<label className="block text-gray-600 mb-2" htmlFor="priority">
							Priority
						</label>
						<select
							id="priority"
							value={priority}
							onChange={(e) => setPriority(e.target.value)}
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							<option value="Low">Low</option>
							<option value="Medium">Medium</option>
							<option value="High">High</option>
						</select>
					</div>

					{/* status */}
					<div>
						<label className="block text-gray-600 mb-2" htmlFor="priority">
							Status
						</label>
						<select
							id="status"
							value={incidentStatus}
							onChange={(e) => setIncidentStatus(e.target.value)}
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							<option value="open">Open</option>
							<option value="inProgress">In Progress</option>
							<option value="resolved">resolved</option>
						</select>
					</div>

					{/* Incident Date */}

					{/* Submit Button */}
					<div>
						<button
							type="submit"
							className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
						>
							Submit Incident
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreateIncident;
