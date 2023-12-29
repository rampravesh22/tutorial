import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuGridR } from "react-icons/cg";
import { NavLink, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

const NavBar = () => {
	const location = useLocation();
	const [menu, setMenu] = useState(false);
	const path = location.pathname.split("/")[1];
	const setActive = (pathValue) => {
		return path === pathValue;
	};

	return (
		<div className="flex flex-col">
			<div className="flex items-center  ">
				<div className="logo font-bold text-3xl justify-between flex w-full">
					<div className="flex items-center">
						<CgMenuGridR className="" />
						<span className="text-teal-800 ">Bio</span>
						<div className="text-teal-500">Tex</div>
					</div>
					<div className="flex items-center lg:hidden">
						{!menu && (
							<button type="button" onClick={() => setMenu(!menu)}>
								<GiHamburgerMenu className="text-3xl" />
							</button>
						)}
						{menu && (
							<button type="button" onClick={() => setMenu(!menu)}>
								<AiOutlineClose className="text-3xl" />
							</button>
						)}
					</div>
				</div>
				<nav className="hidden lg:block">
					<ul className="uppercase flex gap-3">
						<li>
							<NavLink
								to="/"
								className={twMerge(
									" transition-all px-3 py-3  ",
									setActive("") ? "text-white bg-teal-600" : ""
								)}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="aboutus"
								className={twMerge(
									" transition-all px-3 py-3  ",
									setActive("aboutus") ? "text-white bg-teal-600" : ""
								)}
							>
								AboutUs
							</NavLink>
						</li>
						<li>
							<NavLink
								to="services"
								className={twMerge(
									" transition-all px-3 py-3  ",
									setActive("services") ? "text-white bg-teal-600" : ""
								)}
							>
								Services
							</NavLink>
						</li>
						<li>
							<NavLink
								to="portfolio"
								className={twMerge(
									" transition-all px-3 py-3  ",
									setActive("portfolio")
										? "text-white bg-teal-600"
										: ""
								)}
							>
								Portfolio
							</NavLink>
						</li>
						<li>
							<NavLink
								to="pricing"
								className={twMerge(
									" transition-all px-3 py-3  ",
									setActive("pricing") ? "text-white bg-teal-600" : ""
								)}
							>
								Pricing
							</NavLink>
						</li>
						<li>
							<NavLink
								to="contact"
								className={twMerge(
									" transition-all px-3 py-3  ",
									setActive("contact") ? "text-white bg-teal-600" : ""
								)}
							>
								Contact
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
			{menu ? (
				<nav className="lg:hidden self-center mt-4">
					<ul
						className="uppercase flex flex-col gap-3 text-center"
						onClick={() => setMenu(!menu)}
					>
						<li>
							<NavLink
								to="/"
								className={twMerge(
									" transition-all px-3 py-3  ",
									setActive("") ? "text-white bg-teal-600" : ""
								)}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="aboutus"
								className={twMerge(
									" transition-all px-3 py-3  ",
									setActive("aboutus") ? "text-white bg-teal-600" : ""
								)}
							>
								AboutUs
							</NavLink>
						</li>
						<li>
							<NavLink
								to="services"
								className={twMerge(
									" transition-all px-3 py-3  ",
									setActive("services") ? "text-white bg-teal-600" : ""
								)}
							>
								Services
							</NavLink>
						</li>
						<li>
							<NavLink
								to="portfolio"
								className={twMerge(
									" transition-all px-3 py-3  ",
									setActive("portfolio")
										? "text-white bg-teal-600"
										: ""
								)}
							>
								Portfolio
							</NavLink>
						</li>
						<li>
							<NavLink
								to="pricing"
								className={twMerge(
									" transition-all px-3 py-3  ",
									setActive("pricing") ? "text-white bg-teal-600" : ""
								)}
							>
								Pricing
							</NavLink>
						</li>
						<li>
							<NavLink
								to="contact"
								className={twMerge(
									" transition-all px-3 py-3  ",
									setActive("contact") ? "text-white bg-teal-600" : ""
								)}
							>
								Contact
							</NavLink>
						</li>
					</ul>
				</nav>
			) : null}
		</div>
	);
};

export default NavBar;
