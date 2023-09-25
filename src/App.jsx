import { useState } from "react";
import data from "./data.json";
import Posts from "./Posts";

const App = () => {
	const [posts, setPosts] = useState(data.comments);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 9;

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentPosts = posts.slice(startIndex, endIndex);
	const totalPages = Math.ceil(posts.length / itemsPerPage);

	const handlePrev = () => {
		setLoading(true);
		setTimeout(() => {
			setCurrentPage(currentPage - 1);
			setLoading(false);
		}, 400);
	};
	const handleNext = () => {
		setLoading(true);
		setTimeout(() => {
			setCurrentPage(currentPage + 1);
			setLoading(false);
		}, 400);
	};
	return (
		<>
			<div className="app-wrapper flex gap-4 items-center flex-col content-center p-10 h-screen flex-wrap justify-center ">
				<div className="posts gap-2 flex-grow content-center flex  flex-wrap justify-center min-h-[400px] max-w-3xl">
					{!loading ? (
						<Posts posts={currentPosts} />
					) : (
						<div className="w-20 h-20 border-4 border-e-black animate-spin  rounded-full"></div>
					)}
				</div>
				<div className="paginate flex gap-3">
					<button
						type="button"
						disabled={currentPage == 1}
						onClick={handlePrev}
						className="border-2 px-5 py-1 disabled:bg-gray-500 disabled:text-white hover:bg-slate-300 rounded-md"
					>
						Prev
					</button>
					<span className="px-5 py-1">
						Page: {currentPage} of {totalPages}
					</span>
					<button
						type="button"
						onClick={handleNext}
						className="border-2 px-5 py-1 hover:bg-slate-300  disabled:bg-gray-500 disabled:text-white  rounded-md"
						disabled={endIndex >= posts.length}
					>
						Next
					</button>
				</div>
			</div>
		</>
	);
};

export default App;
