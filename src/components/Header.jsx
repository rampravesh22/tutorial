import React, { useContext, useEffect } from "react";
import { GrGamepad } from "react-icons/gr";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { LuSunMoon } from "react-icons/lu";
import { GlobalContext } from "../context/ContextProvider";

const Header = () => {
	const { setTheme, theme } = useContext(GlobalContext);
	const toggleTheme = () => {
		if (localStorage.getItem("theme") === "dark") {
			localStorage.setItem("theme", "light");
			setTheme("light");
		} else {
			localStorage.setItem("theme", "dark");
			setTheme("dark");
		}
	};
	return (
		<div className="flex items-center p-3 ">
			<div className="logo flex items-center">
				<GrGamepad className="text-emerald-600  font-bold text-3xl dark:text-white" />
			</div>
			<div className="search flex border rounded-full mx-5 p-2 bg-slate-200 flex-grow items-center">
				<HiOutlineMagnifyingGlass />
				<input
					type="text"
					placeholder="Search Games"
					className="px-2 bg-transparent outline-none w-full"
				/>
			</div>
			<div
				className="theme flex items-center text-4xl "
				onClick={toggleTheme}
			>
				{theme === "light" ? (
					<button>
						<BsFillMoonStarsFill className="bg-slate-200 p-1.5 rounded-full text-black" />
					</button>
				) : (
					<button>
						<LuSunMoon className="bg-slate-200 p-1.5 rounded-full text-black" />
					</button>
				)}
			</div>
		</div>
	);
};

export default Header;
