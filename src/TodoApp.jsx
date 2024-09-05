import { BsCalendarDate } from "react-icons/bs";
import {
	Button,
	Card,
	CardBody,
	Checkbox,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Tab,
	Tabs,
	toggle,
	useDisclosure,
} from "@nextui-org/react";
import React, { useEffect, useReducer, useRef, useState } from "react";
import {
	addTodo,
	deleteTodo,
	loadTodo,
	toggleTodo,
} from "./reducer/actionCreater";
import reducer from "./reducer/todoReducer";

const initalState = () => {
	const todos = localStorage.getItem("todos");
	if (!localStorage.getItem("todos")) {
		localStorage.setItem("todos", JSON.stringify([]));
	}
	return todos ? JSON.parse(todos) : [];
};

const TodoApp = () => {
	const [todos, dispatch] = useReducer(reducer, initalState());
	const [input, setInput] = useState("");
	const [loading, setLoading] = useState(false);

	// const [selected, setSelected] = useState(false);
	const inputRef = useRef();
	const [deleteId, setDeleteId] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addTodo(input));
		setInput("");
		inputRef.current.focus();
	};
	useEffect(() => {
		dispatch(loadTodo());
	}, []);

	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
	const handleDeleteTodo = (id) => {
		setLoading(true);
		console.log(id);
		setTimeout(() => {
			dispatch(deleteTodo(deleteId));
			setLoading(false);
			onClose();
		}, 1000);
	};

	const handleCheckboxChange = () => {};

	return (
		<div className="max-w-3xl mx-auto">
			<form
				action=""
				onSubmit={handleSubmit}
				className="w-[90%] flex gap-1 mx-auto mt-4"
			>
				<Input
					type="text"
					placeholder="Enter todo"
					variant="faded"
					className="w-full"
					required
					ref={inputRef}
					value={input}
					autoFocus
					onChange={(e) => setInput(e.target.value)}
				/>
				<Button type="submit" color="success">
					ADD
				</Button>
			</form>
			<div className="px-7 mt-4 flex flex-col gap-3">
				<Tabs
					aria-label="Options"
					// selectedKey={selected}
					// onSelectionChange={handleSelectedChange}
				>
					{/* todo tab */}
					<Tab key="todo" title="Todo">
						<Card className="">
							<CardBody className="flex bg-white gap-3">
								{todos.map((todo, index) => {
									return (
										<div
											className="flex hover:shadow-lg border transition-all hover:border rounded px-5 py-6 items-center h-10 group justify-between first-letter:capitalize"
											key={index}
										>
											<div className="flex items-center gap-2">
												<div>
													<Checkbox
														value={todo.complete}
														isSelected={todo.complete}
														onChange={() => dispatch(toggleTodo(todo.id))} // Dispatch action on checkbox change
													/>
												</div>
												{todo.name}
											</div>
											<div className="group-hover:flex gap-2 hidden">
												<Button
													onPress={onOpen}
													type="button"
													size="sm"
													color="danger"
													onClick={() => setDeleteId(todo.id)}
												>
													Delete
												</Button>
												<Button type="button" size="sm" color="primary">
													Edit
												</Button>
											</div>
											<Modal
												placement="center"
												isOpen={isOpen}
												backdrop="transparent"
												aria-hidden
												onOpenChange={onOpenChange}
											>
												<ModalContent>
													{(onClose) => (
														<>
															<ModalHeader className="flex flex-col gap-1">
																Confirm Deletion
															</ModalHeader>
															<ModalBody></ModalBody>
															<ModalFooter>
																<Button
																	color="danger"
																	variant="light"
																	onPress={onClose}
																	type="button"
																>
																	Close
																</Button>
																<Button
																	isLoading={loading}
																	type="button"
																	color="primary"
																	onClick={() => {
																		handleDeleteTodo();
																	}}
																>
																	Yes
																</Button>
															</ModalFooter>
														</>
													)}
												</ModalContent>
											</Modal>
										</div>
									);
								})}
							</CardBody>
						</Card>
					</Tab>

					{/* completed tab */}
					<Tab key="completed" title="Completed">
						<Card>
							<CardBody className="flex gap-3">
								{todos.map((todo, index) => {
									if (todo.complete) {
										return (
											<div
												className="flex hover:shadow-lg border transition-all hover:border rounded px-5 py-6 items-center h-10 group justify-between first-letter:capitalize"
												key={index}
											>
												<div>{todo.name}</div>
												<div className="group-hover:flex gap-2 hidden">
													<Button
														onPress={onOpen}
														type="button"
														size="sm"
														color="danger"
														onClick={() => setDeleteId(todo.id)}
													>
														Delete
													</Button>
													<Button type="button" size="sm" color="primary">
														Edit
													</Button>
												</div>
												<Modal
													placement="center"
													isOpen={isOpen}
													backdrop="transparent"
													aria-hidden
													onOpenChange={onOpenChange}
												>
													<ModalContent>
														{(onClose) => (
															<>
																<ModalHeader className="flex flex-col gap-1">
																	Confirm Deletion
																</ModalHeader>
																<ModalBody></ModalBody>
																<ModalFooter>
																	<Button
																		color="danger"
																		variant="light"
																		onPress={onClose}
																		type="button"
																	>
																		Close
																	</Button>
																	<Button
																		isLoading={loading}
																		type="button"
																		color="primary"
																		onClick={() => {
																			handleDeleteTodo();
																		}}
																	>
																		Yes
																	</Button>
																</ModalFooter>
															</>
														)}
													</ModalContent>
												</Modal>
											</div>
										);
									}
								})}
							</CardBody>
						</Card>
					</Tab>
					{/* calendar tab */}
					<Tab key="calendar" title="Calendar">
						<Card>
							<CardBody className="grid grid-cols-2 gap-4 ">
								{todos.map((todo, index) => {
									return (
										<div
											className={`flex h-24 hover:shadow-lg border flex-col transition-all hover:border rounded p-2 items-center  group first-letter:capitalize ${
												new Date().getDate() === new Date(todo.date).getDate()
													? "bg-green-500"
													: ""
											}`}
											key={index}
										>
											<div className="flex items-center gap-4">
												<BsCalendarDate className="text-sm" />
												<span>
													{new Date(todo.addDate).toLocaleDateString()}
												</span>
												<span>
													{new Date(todo.addDate)
														.toLocaleTimeString()
														.slice(0, -3)}
												</span>
											</div>
											<div>{todo.name}</div>
											<div className="group-hover:flex gap-2 hidden">
												<Button
													onPress={onOpen}
													type="button"
													size="sm"
													color="danger"
													onClick={() => setDeleteId(todo.id)}
												>
													Delete
												</Button>
												<Button type="button" size="sm" color="primary">
													Edit
												</Button>
											</div>
											<Modal
												placement="center"
												isOpen={isOpen}
												backdrop="transparent"
												aria-hidden
												onOpenChange={onOpenChange}
											>
												<ModalContent>
													{(onClose) => (
														<>
															<ModalHeader className="flex flex-col gap-1">
																Confirm Deletion
															</ModalHeader>
															<ModalBody></ModalBody>
															<ModalFooter>
																<Button
																	color="danger"
																	variant="light"
																	onPress={onClose}
																	type="button"
																>
																	Close
																</Button>
																<Button
																	isLoading={loading}
																	type="button"
																	color="primary"
																	onClick={() => {
																		handleDeleteTodo();
																	}}
																>
																	Yes
																</Button>
															</ModalFooter>
														</>
													)}
												</ModalContent>
											</Modal>
										</div>
									);
								})}
							</CardBody>
						</Card>
					</Tab>
				</Tabs>
			</div>
		</div>
	);
};

export default TodoApp;
