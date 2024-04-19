import { RiCloseFill } from "react-icons/ri";
import { TbMenu } from "react-icons/tb";
import React, { useEffect, useState } from "react";

const Navbar = () => {
	const [menu, setMenu] = useState(false);
	useEffect(() => {
		document.body.style.overflow = menu ? "hidden" : "auto";
	}, [menu]);
	return (
		<div className=" w-full p-3 z-10 fixed top-0 text-3xl justify-between flex bg-teal-700 text-white">
			<div>logo</div>
			<button className="md:hidden" onClick={() => setMenu(!menu)}>
				{!menu ? <TbMenu /> : <RiCloseFill />}
			</button>
			<div
				className={`md:hidden absolute transition-all origin-top left-0 ${
					menu ? "scale-y-100" : "scale-y-0"
				} h-[310px] top-12  -z-10 bg-teal-700 w-full`}
			>
				<div className="flex flex-col text-lg ml-4 gap-5 mt-6">
					<a href="">Home</a>
					<a href="">Contact</a>
					<a href="">About Us</a>
					<a href="">Pricing</a>
					<a href="">Login</a>
					<a href="">Register</a>
				</div>
			</div>
			<div className="hidden md:block">
				<div className="flex items-center text-lg  gap-5 ">
					<a href="">Home</a>
					<a href="">Contact</a>
					<a href="">About Us</a>
					<a href="">Pricing</a>
					<a href="">Login</a>
					<a href="">Register</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
