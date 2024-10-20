import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Card, Skeleton } from "@nextui-org/react";
import { motion } from "framer-motion";
import ReviewList from "./ReviewList";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import { addToWatchlist } from "../actions/watchlistActions";
import { LuPlus, LuStar, LuCalendar, LuInfo } from "react-icons/lu";
import toast from "react-hot-toast";
import MovieBooking from "./MovieBooking";

export function Skeleton1() {
	return (
		<div className="flex gap-5 w-full p-10 relative">
			<Skeleton className="rounded-xl">
				<div className="h-[600px] max-w-[400px] w-[600px] rounded-xl"></div>
			</Skeleton>
			<div className="space-y-4">
				<Skeleton className="rounded-xl h-12 w-[600px]"></Skeleton>
				<Skeleton className="rounded-xl h-4 w-10"></Skeleton>
				<Skeleton className="rounded-xl h-12 w-40"></Skeleton>
				<Skeleton className="rounded-xl h-6 w-80"></Skeleton>
				<Skeleton className="rounded-xl h-6 w-32"></Skeleton>
				<Skeleton className="rounded-xl h-32 w-full"></Skeleton>
				<Skeleton className="rounded-xl h-12 w-40"></Skeleton>
			</div>
		</div>
	);
}

const MovieDetails = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState({});
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		const getData = async () => {
			setLoading(true);
			const { data } = await api.get(`/movies/${id}`);
			setMovie(data);
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

	if (loading) {
		return (
			<div className="flex gap-10 flex-wrap justify-center">
				<Skeleton1 />
			</div>
		);
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="p-10 bg-white min-h-screen"
		>
			<div className="flex gap-6 lg:gap-16 flex-col md:flex-row max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="relative h-[600px] w-[600px] max-w-[400px] rounded-xl group overflow-hidden shadow-lg"
				>
					<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
					<img
						src={movie.poster}
						alt=""
						className="object-cover w-full h-full rounded-xl transition-all duration-700 group-hover:scale-110"
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="max-w-[600px] space-y-6"
				>
					<motion.h1
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="text-5xl font-bold text-gray-800"
					>
						{movie.title}
					</motion.h1>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.5 }}
						className="flex items-center gap-3"
					>
						<span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 border border-purple-200 text-sm font-medium">
							{movie.genre}
						</span>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						className="flex items-center gap-4"
					>
						<span className="text-gray-600">Rating</span>
						<div className="relative">
							<div className="absolute inset-0 bg-yellow-400 rounded-full blur-sm opacity-30"></div>
							<div className="relative bg-yellow-400 size-14 rounded-full flex justify-center items-center">
								<div className="size-12 rounded-full bg-white flex justify-center items-center gap-1 shadow-sm">
									<span className="text-yellow-600 font-semibold">
										{movie.rating}
									</span>
									<LuStar className="text-yellow-500" />
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.7 }}
						className="flex items-center gap-2 text-gray-600"
					>
						<LuCalendar className="text-purple-500" />
						<span className="font-medium">Release Date:</span>
						<span>{movie.releaseDate}</span>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.8 }}
						className="space-y-2"
					>
						<div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
							<LuInfo className="text-purple-500" />
							<span>Overview</span>
						</div>
						<p className="text-gray-600 leading-relaxed">{movie.description}</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.9 }}
						className="flex flex-col gap-4 pt-4"
					>
						<Button
							onClick={handleAddToWatchList}
							className="group bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300"
							size="lg"
						>
							<span className="flex items-center gap-2">
								Add to Watchlist
								<motion.div
									animate={{ rotate: [0, 90] }}
									transition={{ duration: 0.3 }}
									className="group-hover:rotate-90"
								>
									<LuPlus />
								</motion.div>
							</span>
						</Button>
						<MovieBooking movieId={movie.id} movieDetails={movie} />
					</motion.div>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 1 }}
				className="mt-16 p-8 bg-gray-50 rounded-xl shadow-md border border-gray-100"
			>
				<ReviewList movieId={movie.id} />
			</motion.div>
		</motion.div>
	);
};

export default MovieDetails;
