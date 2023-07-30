import React from "react";
import Product from "./Product";
import { NavLink, Outlet } from "react-router-dom";
const Products = () => {
	return (
		<div className="flex items-stretch">
			<ul className="bg-slate-800 text-white space-y-4 pb-12 h-96 w-60 pt-12 flex flex-col">
				<li>
					<NavLink
						className={"hover:text-slate-500 px-4 py-2 "}
						to={"product/phone"}
					>
						Phone
					</NavLink>
				</li>
				<li>
					<NavLink
						className={"hover:text-slate-500 px-4 py-2 "}
						to={"product/grocerries"}
					>
						Grocerries
					</NavLink>
				</li>
				<li>
					<NavLink
						className={"hover:text-slate-500 px-4 py-2 "}
						to={"product/laptop"}
					>
						Laptop
					</NavLink>
				</li>
				<li>
					<NavLink
						className={"hover:text-slate-500 px-4 py-2 "}
						to={"product/foods"}
					>
						Foods
					</NavLink>
				</li>
				<li>
					<NavLink
						className={"hover:text-slate-500 px-4 py-2 "}
						to={"product/accessories"}
					>
						Accessories
					</NavLink>
				</li>
				<li>
					<NavLink
						className={"hover:text-slate-500 px-4 py-2 "}
						to="product/items"
					>
						Items
					</NavLink>
				</li>
				<li>
					<NavLink
						className={"hover:text-slate-500 px-4 py-2 "}
						to="product/data"
					>
						Data
					</NavLink>
				</li>
			</ul>
			<Product />
		</div>
	);
};

export default Products;
