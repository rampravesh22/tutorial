import { CgMenuGridR } from "react-icons/cg";
import { NavLink, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const NavBar = () => {
	const location = useLocation();
	const path = location.pathname.split("/")[1];
	const setActive = (pathValue) => {
		return path === pathValue;
	};

	return (
		<div className="flex items-center justify-between">
			<div className="logo font-bold text-3xl flex items-center">
				<CgMenuGridR className="" />
				<span className="text-teal-800 ">Bio</span>
				<div className="text-teal-500">Tex</div>
			</div>
			<nav>
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
								setActive("portfolio") ? "text-white bg-teal-600" : ""
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
	);
};

export default NavBar;
