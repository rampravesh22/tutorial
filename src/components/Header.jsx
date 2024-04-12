import { FaSuperpowers } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { CgMenu } from "react-icons/cg";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
	const [hamMenu, setHamMenu] = useState(false);
	return (
		<>
			{/* desktop menu */}
			<div className="navbar  flex fixed z-20 bg-neutral text-white justify-between items-center pr-8">
				<Link to={"/"} className="btn btn-ghost group text-xl flex gap-1">
					<FaSuperpowers className="group-hover:animate-spin " />
					<span>
						<span className="">Shoppingo</span>
					</span>
				</Link>
				<div className=" gap-10 text-xl items-center hidden md:flex">
					<Link
						to={"/cart"}
						className="flex items-center gap-1  hover:text-base-300"
					>
						<AiOutlineShoppingCart className="text-2xl " />
						Cart
					</Link>
					<Link
						to={"/signin"}
						className="flex items-center gap-1 hover:text-base-300"
					>
						<BiUserCircle className="text-2xl" /> Sign in
					</Link>
				</div>
				{!hamMenu ? (
					<button className="md:hidden" onClick={() => setHamMenu(!hamMenu)}>
						<CgMenu className="text-2xl focus:ring" />
					</button>
				) : (
					<button className="md:hidden">
						<CgClose
							className="text-2xl"
							onClick={() => setHamMenu(!hamMenu)}
						/>
					</button>
				)}
			</div>
			{/* mobile menu */}
			<div
				className={`flex pt-5 pb-8 gap-2 text-lg z-10 fixed  w-full flex-col transition-all pl-8   bg-neutral text-white  ${
					hamMenu ? "top-16" : "-top-16"
				}  md:hidden`}
			>
				<button className="flex items-center gap-1  hover:text-base-300">
					<AiOutlineShoppingCart className="text-xl " />
					Cart
				</button>
				<button className="flex items-center gap-1 hover:text-base-300">
					<BiUserCircle className="text-xl" /> Sign in
				</button>
			</div>
		</>
	);
};

export default Header;
