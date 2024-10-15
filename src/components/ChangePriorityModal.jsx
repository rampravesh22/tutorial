import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Radio,
	RadioGroup,
} from "@nextui-org/react";
import React, { useState } from "react";

const ChangePriorityModal = ({
	priorityModal,
	incidentId,
	setPriorityModal,
}) => {
	console.log(incidentId);
	const [selected, setSelected] = useState("low");
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
			<Modal isOpen={priorityModal} onOpenChange={() => setPriorityModal(true)}>
				<ModalContent>
					<>
						<ModalHeader className="flex flex-col gap-1">
							Update Priority
						</ModalHeader>
						<ModalBody>
							<div className="">
								<RadioGroup
									value={selected}
									onValueChange={setSelected}
									orientation="horizontal"
									className="flex gap-10"
								>
									<Radio
										className="text-black border px-4 border-gray-500 rounded-full"
										value="low"
										color="default"
									>
										Low
									</Radio>
									<Radio
										className="text-black  border accent-secondary-800 px-4 mx-6 border-gray-500 rounded-full"
										value="medium"
										color="secondary"
									>
										Medium
									</Radio>
									<Radio
										className="text-black border px-4 border-gray-500 rounded-full"
										value="high"
										color="danger"
									>
										High
									</Radio>
								</RadioGroup>
							</div>
						</ModalBody>
						<ModalFooter>
							<Button
								color="danger"
								variant="light"
								onPress={() => setPriorityModal(false)}
							>
								Close
							</Button>
							<Button
								color="danger"
								variant="shadow"
								onPress={() => setPriorityModal(false)}
							>
								Update
							</Button>
						</ModalFooter>
					</>
				</ModalContent>
			</Modal>
		</div>
	);
};

export default ChangePriorityModal;
