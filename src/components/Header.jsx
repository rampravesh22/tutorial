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
			<div className="navbar flex bg-neutral text-white justify-between items-center pr-8">
				<Link to={"/"} className="btn btn-ghost group text-xl flex gap-1">
					<FaSuperpowers className="group-hover:animate-spin " />
					<span>
						<span className="">Pro</span>Shop
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
				className={`flex gap-3 text-lg flex-col origin-top transition-all pl-8  py-4 bg-neutral text-white  ${
					hamMenu ? "scaley-y-100" : "scale-y-0"
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
