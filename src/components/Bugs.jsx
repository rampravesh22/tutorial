import AddBug from "./AddBug";
import ShowBugs from "./ShowBugs";

const Bugs = () => {
	return (
		<div className="min-h-screen flex flex-col ">
			<div className="header bg-red-500 text-2xl text-white py-3 text-center font-mono">
				Bug Handler
			</div>
			<div className="bug-container flex-grow w-[80%] pb-5 pt-10 px-4 bg-gray-100 h-full m-auto">
				<AddBug />
				<ShowBugs />
			</div>
		</div>
	);
};

export default Bugs;
