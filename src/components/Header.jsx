import React from "react";
import { LuShoppingCart } from "react-icons/lu";

const Header = () => {
	return (
		<nav className="flex justify-around  text-white py-4 bg-zinc-900">
			<div>
				<span className="font-ubuntu text-lg md:text-3xl transition-all">
					Shoppingly
				</span>
			</div>
			<div>
				<button>
					<LuShoppingCart className="md:text-4xl text-xl transition-all" />
				</button>
			</div>
		</nav>
	);
};

export default Header;
