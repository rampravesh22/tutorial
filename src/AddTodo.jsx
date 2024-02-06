import { RxCross1 } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";
import React, { useContext, useEffect, useRef, useState } from "react";
import supabase from "./supabaseClient";
import { GlobalContext } from "./ContextProvider";

const AddTodo = () => {
	const modal = useRef();
	const { setTodos } = useContext(GlobalContext);
	const [showModal, setShowModal] = useState(false);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [text, setText] = useState("");
	const handleAddData = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const { data } = await supabase
				.from("todos")
				.insert([{ content: text }])
				.select();
			setTodos((presState) => {
				return [...presState, data[0]];
			});
			setLoading(false);
			setSuccess(true);
			setTimeout(() => {
				setSuccess(false);
			}, 2000);
			setText("");
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		// set the overflow property of the body element
		document.body.style.overflow = showModal ? "hidden" : "auto";
	}, [showModal]);
	return (
		<div className="flex justify-center mt-12">
			<button
				type="button"
				onClick={() => setShowModal(true)}
				className="bg-blue-600 flex items-center gap-2 hover:bg-blue-700 px-6 py-2 text-white  rounded-md"
			>
				Add Todo
				<AiOutlinePlus />
			</button>

			<div
				ref={modal}
				className={`fixed inset-0  ${
					showModal ? "scale-100" : "scale-0"
				}  z-20 bg-[rgba(0,0,0,.5)] flex duration-0 transition-transform justify-center items-center`}
				onClick={(e) => setShowModal(!(modal.current === e.target))}
			>
				<div
					className={`relative w-[40%] min-w-[400px] max-w-[500px] border-red-600 p-5 border min-h-[210px] bg-white shadow-2xl rounded  transition-transform duration-[10]  ${
						showModal ? "scale-100" : "scale-90"
					} `}
				>
					<button
						className="absolute -top-7 -right-7  "
						onClick={(e) => {
							setShowModal(false);
							e.stopPropagation();
						}}
					>
						<RxCross1 className="text-2xl text-white" />
					</button>
					<h2 className="text-center uppercase bg-pink-700 text-white py-2 text-xxl">
						Add Todo Here
					</h2>
					<form
						action=""
						onSubmit={handleAddData}
						className="h-full w-full mt-8  flex justify-center flex-col"
					>
						<input
							type="text"
							className="border px-2 border-gray-500 focus:border-blue-600 rounded-md h-10"
							required
							value={text}
							placeholder="Enter Todo"
							onChange={(e) => setText(e.target.value)}
							autoFocus
						/>
						<button
							type="submit"
							disabled={loading}
							className="self-end flex items-center gap-2  bg-blue-700 px-4 py-1 text-white mt-3 rounded-md"
						>
							Submit
							{loading && (
								<span className="w-4 h-4 animate-spin rounded-full border  border-e-black"></span>
							)}
						</button>
						<div
							className={`${
								success ? "scale-100 " : "scale-0"
							} bg-green-600 text-white text-center mt-2 py-1 transition-all origin-top text-sm uppercase`}
						>
							Todo added successful.
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddTodo;
