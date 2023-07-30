import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};
	const active = "underline";

	return (
		<div className="flex relative  bg-rose-600 md:items-center flex-col px-4 md:flex-row md:justify-between text-white py-4 md:px-5">
			<div className="text-3xl  md:mb-0">
				<NavLink to="/">Logo</NavLink>
			</div>
			{isOpen ? (
				<nav className="block md:hidden pt-7 transition-all  pl-.5 pb-5">
					<ul className="flex gap-x-10 flex-col space-y-6">
						<li>
							<NavLink
								className={
									"px-3 py-1 rounded-sm transition-all hover:text-slate-400"
								}
								to={"/"}
								style={({ isActive }) => {
									return { textDecoration: isActive ? active : "" };
								}}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								className={
									"px-3 py-1 rounded-sm transition-all hover:text-slate-400"
								}
								to={"/contact"}
								style={({ isActive }) => {
									return { textDecoration: isActive ? active : "" };
								}}
							>
								Contact
							</NavLink>
						</li>
						<li>
							<NavLink
								className={
									"px-3 py-1 rounded-sm transition-all hover:text-slate-400"
								}
								to={"/register"}
								style={({ isActive }) => {
									return { textDecoration: isActive ? active : "" };
								}}
							>
								Register
							</NavLink>
						</li>
						<li>
							<NavLink
								className={
									"px-3 py-1 rounded-sm transition-all hover:text-slate-400"
								}
								to={"/login"}
								style={({ isActive }) => {
									return { textDecoration: isActive ? "red" : "" };
								}}
							>
								Login
							</NavLink>
						</li>
						<li>
							<NavLink
								className={
									"px-3 py-1 rounded-sm transition-all hover:text-slate-400"
								}
								to={"/about"}
								style={({ isActive }) => {
									return { textDecoration: isActive ? "red" : "" };
								}}
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								className={
									"px-3 py-1 rounded-sm transition-all hover:text-slate-400"
								}
								to={"/products"}
								style={({ isActive }) => {
									return { textDecoration: isActive ? "red" : "" };
								}}
							>
								Products
							</NavLink>
						</li>
					</ul>
				</nav>
			) : (
				<nav className="hidden md:block">
					<ul className="flex gap-x-10">
						<li>
							<NavLink
								to={"/"}
								className="active:bg-red-600 px-2 py-1 rounded-sm transition-all hover:text-slate-400"
								style={({ isActive }) => {
									return { textDecoration: isActive ? active : "" };
								}}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								className={
									"px-3 py-1 rounded-sm transition-all hover:text-slate-400"
								}
								to={"/contact"}
								style={({ isActive }) => {
									return { textDecoration: isActive ? active : "" };
								}}
							>
								Contact
							</NavLink>
						</li>
						<li>
							<NavLink
								className={
									"px-3 py-1 rounded-sm transition-all hover:text-slate-400"
								}
								to={"/register"}
								style={({ isActive }) => {
									return { textDecoration: isActive ? active : "" };
								}}
							>
								Register
							</NavLink>
						</li>
						<li>
							<NavLink
								className={
									"px-3 py-1 rounded-sm transition-all hover:text-slate-400"
								}
								to={"/login"}
								style={({ isActive }) => {
									return { textDecoration: isActive ? active : "" };
								}}
							>
								Login
							</NavLink>
						</li>
						<li>
							<NavLink
								className={
									"px-3 py-1 rounded-sm transition-all hover:text-slate-400"
								}
								to={"/about"}
								style={({ isActive }) => {
									return { textDecoration: isActive ? active : "" };
								}}
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								className={
									"px-3 py-1 rounded-sm transition-all hover:text-slate-400"
								}
								to={"/products"}
								style={({ isActive }) => {
									return { textDecoration: isActive ? active : "" };
								}}
							>
								Products
							</NavLink>
						</li>
					</ul>
				</nav>
			)}
			<button
				className="absolute md:hidden right-4"
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				{!isOpen ? (
					<FiMenu className="text-3xl" />
				) : (
					<FiX className="text-3xl" />
				)}
			</button>
		</div>
	);
};

export default Header;
