import React, { useContext, useState } from "react";
import { IncidentContext } from "../context/IncidentContext";
import ShowIncidentModal from "../components/ShowIncidentModal";
import ChangePriorityModal from "../components/ChangePriorityModal";

const ViewIncidents = () => {
	const { incidents } = useContext(IncidentContext);
	const [showModal, setShowModal] = useState(false);
	const [priorityModal, setPriorityModal] = useState(false);
	const [incidentId, setIncidentId] = useState(null);

	const getStatusLabelColor = (status) => {
		switch (status) {
			case "InProgress":
				return "bg-yellow-500 text-white";
			case "Resolved":
				return "bg-green-500 text-white";
			case "Open":
				return "bg-blue-500 text-white";
			default:
				return "bg-gray-400 text-white";
		}
	};

	return (
		<div className="min-h-screen flex justify-center  items-center bg-gray-100 p-6">
			<div className="bg-white rounded-lg shadow-lg border p-8 w-full max-w-4xl">
				<h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
					View Incidents
				</h2>
				{incidents.length > 0 ? (
					<table className="w-full table-auto">
						<thead>
							<tr className="bg-gray-200 text-gray-700">
								<th className="px-4 py-2">Id</th>
								<th className="px-4 py-2">Title</th>
								<th className="px-4 py-2">Description</th>
								<th className="px-4 py-2">Priority</th>
								<th className="px-4 py-2">Date & Time</th>
								<th className="px-4 py-2">Status</th>
							</tr>
						</thead>
						<tbody>
							{incidents.map((incident, index) => (
								<tr key={index} className="text-gray-600">
									<td className="border px-4 py-2">{index + 1}</td>
									<td className="border px-4 py-2">
										<button
											onClick={() => setShowModal(true)}
											className="text-blue-600 capitalize hover:underline"
										>
											{incident.title}
										</button>
										<ShowIncidentModal
											incident={incident}
											showModal={showModal}
											setShowModal={setShowModal}
										/>
									</td>
									<td className="border px-4 py-2">
										{incident.description.slice(0, 20)}
									</td>
									<td
										className={`border px-4 py-2 ${
											incident.priority === "High"
												? "text-red-500"
												: incident.priority === "Medium"
												? "text-yellow-500"
												: "text-green-500"
										}`}
									>
										<button
											onClick={() => {
												setPriorityModal(true);
												setIncidentId(incident.id);
											}}
											className="hover:underline"
										>
											{incident.priority}
										</button>
										{
											<ChangePriorityModal
												incident={incident}
												incidentId={incidentId}
												priorityModal={priorityModal}
												setPriorityModal={setPriorityModal}
											/>
										}
									</td>
									<td className="border px-4 py-2">
										{new Date(incident.incidentDate).toLocaleDateString()} &{" "}
										{new Date(incident.incidentDate).toLocaleTimeString()}
									</td>
									<td className="border px-4 py-2">
										<span
											className={`px-2 py-1 text-sm rounded ${getStatusLabelColor(
												incident.status
											)}`}
										>
											{incident.incidentStatus}
										</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				) : (
					<p className="text-center text-gray-500">No incidents found.</p>
				)}
			</div>
		</div>
	);
};

export default ViewIncidents;
