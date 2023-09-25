import { useState } from "react";
import data from "./data.json";
import Posts from "./Posts";

const App = () => {
	const [posts, setPosts] = useState(data.comments);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 9;

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentPosts = posts.slice(startIndex, endIndex);
	const totalPages = Math.ceil(posts.length / itemsPerPage);
	return (
		<>
			<div className="app-wrapper flex gap-4 content-center h-screen flex-wrap justify-center ">
				<div className="posts gap-2 flex flex-wrap justify-center">
					<Posts posts={currentPosts} />
				</div>
				<div className="paginate flex gap-3">
					<button
						type="button"
						disabled={currentPage == 1}
						onClick={() => setCurrentPage(currentPage - 1)}
						className="border-2 px-5 py-1 disabled:bg-gray-500 disabled:text-white hover:bg-slate-300 rounded-md"
					>
						Prev
					</button>
					<span className="px-5 py-1">
						Page: {currentPage} of {totalPages}
					</span>
					<button
						type="button"
						onClick={() => setCurrentPage(currentPage + 1)}
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
