import React, { useState } from "react";

const Bug = ({ bug }) => {
	const [solvedModal, setSolvedModal] = useState(true);
	const localDate = new Date(bug.dateAdded).toLocaleDateString();
	const localTime = new Date(bug.dateAdded).toLocaleTimeString();
	const bugDate = new Date(bug.dateAdded); // Convert the bug's date to a Date object
	const currentDate = new Date(); // Get the current date and time

	// Calculate the time difference in milliseconds
	const timeDifference = currentDate - bugDate;

	// Calculate the number of days and hours ago
	const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
	const hoursAgo = Math.floor(
		(timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutesAgo = Math.floor(timeDifference / (1000 * 60));
	const secondsAgo = Math.floor((timeDifference / 1000) % 60);

	return (
		<div className="flex items-center gap-1">
			<div
				className={`bg-white relative overflow-hidden group flex-grow rounded-md px-2.5 flex justify-between py-2.5 items-center`}
			>
				{" "}
				<a>{bug.description}</a>
				<p className="text-[10px] text-slate-500">
					Added{" "}
					<span>
						{daysAgo > 0 &&
							`${daysAgo} ${daysAgo === 1 ? "day" : "days"}`}
					</span>
					<span>
						{hoursAgo >= 1 && daysAgo === 0 ? `${hoursAgo}mins` : null}
					</span>
					<span>
						{minutesAgo >= 1 && daysAgo === 0 && hoursAgo === 0
							? `${minutesAgo}mins`
							: null}
					</span>
					<span>
						{secondsAgo >= 0 &&
						minutesAgo === 0 &&
						daysAgo === 0 &&
						hoursAgo === 0
							? `${secondsAgo}s`
							: null}
					</span>{" "}
					ago
				</p>
				{solvedModal ? (
					<div className="solve-modal rounded-md  fixed inset-0 flex items-center justify-center gap-10 z-20 shadow-2xl backdrop-blur-md">
						<div className="modal-content bg-white w-[500px] flex flex-col justify-center items-center h-[300px]">
							<div className="modal-body">
								<label htmlFor="">Resolved</label>
								<input type="radio" name="resolved" value={false} />
								<input type="radio" name="resolved" />
							</div>
							<button className="px-5 rounded-md bg-green-700 py-1 text-white">
								Yes
							</button>
							<button className="px-5 text-white rounded-md py-1 bg-blue-700">
								No
							</button>
						</div>
					</div>
				) : null}
				{!solvedModal ? (
					<div
						className="btn absolute right-0 group-hover:translate-x-[-20%]
            z-10 transition-all  text-white translate-x-[200%]"
					>
						<button
							className="px-3 rounded-md bg-blue-700 py-1"
							onClick={() => setSolvedModal(true)}
						>
							Solved
						</button>
					</div>
				) : null}
			</div>
			<span
				className={`h-4 w-4 rounded-full shadow ${
					bug.resolved ? "bg-green-600" : "bg-red-600 "
				}  `}
			></span>
		</div>
	);
};

export default Bug;
