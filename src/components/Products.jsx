import { useState } from "react";
import { useGlobalContext } from "../context/contextapi";
import Product from "./Product";

const Products = () => {
	const [addToCartNotification, setAddToCartNotification] = useState(false);
	const { products } = useGlobalContext();
	const [currentPage, setCurrentPage] = useState(1);
	const dataPerPage = 6;
	const startIndex = (currentPage - 1) * dataPerPage;
	const endIndex = startIndex + dataPerPage;

	const paginateData = products.slice(startIndex, endIndex);
	const totalPageCount = Math.ceil(products.length / dataPerPage);

	const handlePrev = () => {
		setCurrentPage((preState) => preState - 1);
	};
	const handleNext = () => {
		setCurrentPage((preState) => preState + 1);
	};

	return (
		<div className="main">
			<div
				className={` ${
					addToCartNotification ? "scale-y-100" : "scale-y-0"
				} origin-top fixed top-0 w-full z-50 add-t-cart-notification transition-all bg-emerald-700 h-12 flex items-center justify-between px-5 text-l font-light text-white`}
			>
				<p>Product added to cart successfully</p>
				<div className="cart-btns flex gap-6">
					<button
						type="button"
						className="shadow-md bg-gray-400 px-5 py-1 rounded-md"
					>
						Go to cart
					</button>
					<button
						type="button"
						onClick={() => setAddToCartNotification(false)}
						className="shadow-md bg-red-400 px-5 py-1 rounded-md"
					>
						Close
					</button>
				</div>
			</div>
			<div className="product-wrapper w-[80%] m-auto p-10  flex flex-wrap gap-10 justify-center mt-4">
				{paginateData.map((product) => (
					<Product
						key={product.id}
						product={product}
						addToCartNotification={addToCartNotification}
						setAddToCartNotification={setAddToCartNotification}
					/>
				))}
			</div>
			<div className="paginate-container items-center gap-4  flex mb-10 justify-center">
				<button
					type="button"
					onClick={handlePrev}
					disabled={currentPage === 1}
					className="border px-5 disabled:bg-slate-300 rounded-md py-1 transition-all hover:bg-slate-800 hover:text-white border-black"
				>
					Prev
				</button>
				<span>
					{currentPage} off {totalPageCount}
				</span>
				<button
					type="button"
					onClick={handleNext}
					disabled={endIndex >= products.length}
					className="border px-5 rounded-md disabled:bg-gray-300 py-1 transition-all hover:bg-slate-800 hover:text-white border-black"
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Products;
