import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from "@nextui-org/react";
import React from "react";

const ShowIncidentModal = ({ showModal, incident, setShowModal }) => {
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
		<div>
			<Modal isOpen={showModal} onOpenChange={setShowModal}>
				<ModalContent>
					<>
						<ModalHeader className="flex flex-col gap-1">
							View Incident
						</ModalHeader>
						<ModalBody>
							<p className="font-semibold capitalize text-2xl ">
								{incident.title}
							</p>
							<hr className="h-1 bg-black" />
							<p>{incident.description}</p>
							<div>
								<span className={`font-semibold text-lg`}>Priority:</span>{" "}
								<span
									className={`px-4 py-1 border rounded-full text-sm ${getStatusLabelColor(
										incident.priority
									)}`}
								>
									{incident.priority}
								</span>
							</div>
							<div>
								<span className="font-semibold text-lg">Status:</span>{" "}
								<span
									className={`px-4 py-1 border rounded-full text-sm ${getStatusLabelColor(
										incident.incidentStatus
									)}`}
								>
									{incident.incidentStatus}
								</span>
							</div>
							<div className="text-end">
								<span className="text-gray-500 text-xs">
									{new Date(incident.incidentDate).toLocaleDateString()} &{" "}
									{new Date(incident.incidentDate).toLocaleTimeString()}
								</span>
							</div>
						</ModalBody>
						<ModalFooter>
							<Button
								color="danger"
								variant="light"
								onPress={() => setShowModal(false)}
							>
								Close
							</Button>
						</ModalFooter>
					</>
				</ModalContent>
			</Modal>
		</div>
	);
};

export default ShowIncidentModal;
