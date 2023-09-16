import { useContext } from "react";
import { useRef } from "react";
import { GlobalContext } from "../contextapi/context";
import { useState } from "react";
import Message from "../utils/Message";

const Home = () => {
	const [message, setMessage] = useState(false);
	const [loading, setLoading] = useState(false);
	const modalRef = useRef();

	const handleSignUp = (e) => {
		modalRef.current.showModal();
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setMessage(true);
		}, 3000);
		setTimeout(() => {
			setMessage(false);
		}, 5000);
	};
	return (
		<div>
			<div className="navbar  bg-neutral text-white flex justify-between px-10">
				<a className="btn btn-ghost normal-case text-xl">daisyUI</a>
				<ul className="flex gap-10">
					<li>
						<a href="">About</a>
					</li>
					<li>
						<a href="">Contact</a>
					</li>
					<li>
						<a href="">Login</a>
					</li>
					<li>
						<button
							className="btn btn-success btn-sm"
							onClick={handleSignUp}
						>
							Sign-up
						</button>
					</li>
				</ul>
			</div>
			<dialog ref={modalRef} id="my_modal_2" className="modal">
				<div className="modal-box">
					<form
						action=""
						onSubmit={handleSubmit}
						className="flex flex-col items-center gap-5"
					>
						<h1 className="font-semibold text-4xl mb-10">
							Welecome here
						</h1>
						<input
							type="text"
							placeholder="Username"
							className="input input-bordered w-full max-w-xs"
						/>
						<input
							type="text"
							placeholder="Email"
							className="input input-bordered w-full max-w-xs"
						/>
						<input
							type="password"
							placeholder="Password"
							className="input input-bordered w-full max-w-xs"
						/>
						<input
							type="password"
							placeholder="Confirm Password"
							className="input input-bordered w-full max-w-xs"
						/>
						<button
							type="submit"
							className="btn btn-primary w-full max-w-xs"
						>
							{loading ? (
								<span className="loading loading-dots loading-md"></span>
							) : (
								"Sign-up"
							)}
						</button>
					</form>
					{message ? (
						<Message
							type="alert-success"
							text="Sign-up success"
							position="toast-top toast-end"
						/>
					) : null}
					<div className="modal-action">
						<form method="dialog">
							<button type="" className="btn">
								Close
							</button>
						</form>
					</div>
				</div>
			</dialog>
		</div>
	);
};

export default Home;
