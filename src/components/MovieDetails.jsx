import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Skeleton, Textarea } from "@nextui-org/react";
import ReviewList from "./ReviewList";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import { addToWatchlist } from "../actions/watchlistActions";
import { LuPlus, LuStar } from "react-icons/lu";
import toast from "react-hot-toast";

export function Skeleton1() {
	return (
		<div className="h- space-y-5 flex gap-5 w-full p-10 relative" radius="lg">
			<Skeleton className="rounded-lg">
				<div className="h-[600px] max-w-[400px] w-[600px] rounded-lg "></div>
			</Skeleton>
			<div>
				<Skeleton className="rounded-lg h-12 w-[600px]"></Skeleton>
				<Skeleton className="rounded-lg h-4 w-10 my-2" />
				<Skeleton className="rounded-lg h-12 w-40 " />
				<Skeleton className="rounded-lg h-6 w-80 mt-10" />
				<Skeleton className="rounded-lg h-6 w-32 mt-8" />
				<Skeleton className="rounded-lg h-32 w-full mt-2" />
				<Skeleton className="rounded-lg h-12 w-40 mt-10" />
			</div>
		</div>
	);
}

const MovieDetails = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState({});
	const [loading, setLoading] = useState(true);
	const [review, setReview] = useState("");
	const [reviews, setReviews] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		const getData = async () => {
			setLoading(true);
			const { data } = await api.get(`/movies/${id}`);
			setMovie(data);
			// Mock existing reviews - Replace with API data if available
			setReviews(data.reviews || []);
			setTimeout(() => {
				setLoading(false);
			}, 500);
		};

		getData();
	}, [id]);

	const handleAddToWatchList = () => {
		const toastId = toast.loading("Adding to watchlist, please wait.");
		setTimeout(() => {
			dispatch(addToWatchlist(movie));
			toast.success("Added to watchlist", {
				id: toastId,
			});
		}, 1000);
	};

	const handleReviewSubmit = () => {
		if (review.trim()) {
			const newReview = {
				id: Date.now(),
				content: review,
				date: new Date().toLocaleDateString(),
			};
			setReviews([newReview, ...reviews]);
			setReview("");
			toast.success("Review added successfully!");
		} else {
			toast.error("Please write a review before submitting.");
		}
	};

	if (loading) {
		return (
			<div className="flex gap-10 flex-wrap justify-center">
				<Skeleton1 />
			</div>
		);
	}

	return (
		<div className="p-10">
			<div className="flex gap-5 flex-col md:flex-row ">
				<div className="h-[600px] w-[600px] max-w-[400px] rounded-lg group overflow-hidden border shadow-2xl border-zinc-400 p-1  bg-zinc-200">
					<img
						src={movie.poster}
						alt=""
						className="object-cover w-full h-full rounded-lg group-hover:scale-125 transition-all duration-500"
					/>
				</div>
				<div>
					<div className="text-5xl">{movie.title}</div>
					<div className="flex gap-5 items-center px-3">
						<div className="size-1 bg-gray-700 rounded-full"></div>
						<p>{movie.genre}</p>
					</div>
					<div className="flex items-center mt-6 mx-2">
						Rating
						<div className="bg-yellow-500 size-14 rounded-full mx-5 flex justify-center items-center">
							<div className="size-12 rounded-full bg-white flex justify-center items-center">
								<span>{movie.rating}</span>
								<LuStar className="text-yellow-600"></LuStar>
							</div>
						</div>
					</div>
					<div className="mx-2 mt-7 flex gap-4">
						Release Date -<p>{movie.releaseDate}</p>
					</div>
					<div className="mx-2 mt-5">
						<div className="text-lg font-semibold">Overview</div>
						<p>{movie.description}</p>
					</div>
					<Button
						onClick={handleAddToWatchList}
						className="flex items-center group text-lg mt-20"
						color="secondary"
						radius="full"
						size="lg"
					>
						<span className="flex justify-center items-center">
							Add to Watchlist
						</span>
						<LuPlus className="group-hover:rotate-90 transition-all duration-500" />
					</Button>
				</div>
			</div>

			{/* Movie Review Section */}
			<div className="mt-16 p-6 bg-gray-800 rounded-lg shadow-lg text-white">
				<ReviewList reviews={reviews} />
			</div>
		</div>
	);
};

export default MovieDetails;
