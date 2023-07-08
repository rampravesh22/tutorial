import React from "react";

const Navbar = () => {
	const changeDark = () => {
		const htmlTag = document.querySelector("html");
		htmlTag.setAttribute("data-theme", "dark");
	};
	const changeLight = () => {
		const htmlTag = document.querySelector("html");
		htmlTag.setAttribute("data-theme", "light");
	};
	return (
		<>
			<div className="navbar bg-base-100">
				<div className="flex-1">
					<a className="btn btn-ghost normal-case text-xl">daisyUI</a>
				</div>
				<div className="flex-none gap-2">
					<div className="form-control">
						<input
							type="text"
							placeholder="Search"
							className="input input-bordered w-24 md:w-auto"
						/>
					</div>
					<div className="form-control">
						<div className="dropdown dropdown-left">
							<label tabIndex={0} className="btn m-1">
								Theme
							</label>
							<ul
								tabIndex={0}
								className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
							>
								<li>
									<button onClick={changeDark}>Dark</button>
								</li>
								<li>
									<button onClick={changeLight}>Light</button>
								</li>
							</ul>
						</div>
					</div>
					<div className="dropdown dropdown-end">
						<label
							tabIndex={0}
							className="btn btn-ghost btn-circle avatar"
						>
							<div className="w-10 rounded-full">
								<img src="https://source.unsplash.com/random/1500x500?Alien" />
							</div>
						</label>
						<ul
							tabIndex={0}
							className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
						>
							<li>
								<a className="justify-between">
									Profile
									<span className="badge">New</span>
								</a>
							</li>
							<li>
								<a>Settings</a>
							</li>
							<li>
								<button
									className=""
									onClick={() => window.my_modal_2.showModal()}
								>
									Register
								</button>
							</li>
							<li>
								<a>Login</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="sign-up-modal">
				<dialog id="my_modal_2" className="modal">
					<form method="dialog" className="modal-box">
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
							✕
						</button>

						<div className="flex items-center justify-center">
							<div className="bg-white rounded-lg  w-80">
								<h2 className="text-2xl font-semibold text-center mb-6">
									Signup
								</h2>
								<div className="mb-4">
									<input
										type="text"
										id="name"
										name="name"
										className="input w-full max-w-xs"
										placeholder="Name"
										required
									/>
								</div>
								<div className="mb-4">
									<input
										type="email"
										id="email"
										name="email"
										className="input w-full max-w-xs"
										placeholder="Email"
										required
									/>
								</div>
								<div className="mb-4">
									<input
										type="password"
										id="password"
										name="password"
										className="input w-full max-w-xs"
										placeholder="Password"
										required
									/>
								</div>
								<div className="mb-4">
									<input
										type="password"
										id="confirm_password"
										name="confirm_password"
										className="input w-full max-w-xs"
										placeholder="Confirm Password"
										required
									/>
								</div>
								<div className="flex items-center justify-between">
									<button type="submit" className="btn btn-primary">
										Signup
									</button>
								</div>
								<a
									href="#"
									className="text-blue-600  mt-40 hover:underline"
								>
									Already have an account? Login
								</a>
							</div>
						</div>
					</form>
					<form method="dialog" className="modal-backdrop">
						<button>close</button>
					</form>
				</dialog>
			</div>
		</>
	);
};

export default Navbar;
