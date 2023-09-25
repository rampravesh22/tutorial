import { useState } from "react";
import { useGlobalContext } from "../context/contextapi";
import Product from "./Product";

const Products = () => {
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
			<div className="product-wrapper w-[80%] m-auto p-10  flex flex-wrap gap-10 justify-center mt-4">
				{paginateData.map((product) => (
					<Product key={product.id} product={product} />
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
