import React, { useEffect, useState } from "react";
import { Card, Skeleton, Button, CardHeader, Image } from "@nextui-org/react";
import { Star } from "lucide-react";
import { LuDelete, LuPlus } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWatchlist } from "../actions/watchlistActions";
import toast from "react-hot-toast";

// Skeleton Loader Component

export function Skeleton1() {
	return (
		<Card
			className="h-[250px]  w-[400px] space-y-5 max-w-[190px]  p-4 relative"
			radius="lg"
		>
			<Skeleton className="rounded-lg">
				<div className="h-24 rounded-lg bg-default-300"></div>
			</Skeleton>
			<div className="space-y-3">
				<Skeleton className="w-4/5 rounded-lg h-5" />
				<Skeleton className="w-3/5 rounded-lg h-4" />
			</div>
			<div className="absolute bottom-0 left-0 flex justify-end right-0 p-4 text-end">
				<Skeleton className="rounded-lg h-8 w-1/2 " />
			</div>
		</Card>
	);
}

const WatchlistCard = ({ movie, id }) => {
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();
	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1200);
		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <Skeleton1 />;
	}

	const handleRemoveFromWatchList = () => {
		console.log(id);
		const toastId = toast.loading("Removing from watchlist, please wait.");
		setTimeout(() => {
			dispatch(removeFromWatchlist(id));

			toast.success("Removed from watchlist.", { id: toastId });
		}, 400);
	};

	return (
		<Card
			isFooterBlurred
			className="relative h-[250px] group max-w-[190px] w-full transition-transform duration-300 transform hover:scale-105"
		>
			<CardHeader className="absolute z-10 top-1 flex-col items-start">
				<p className="text-tiny text-white/60 uppercase font-bold">New</p>
				<h4 className="text-white font-medium text-3xl drop-shadow-lg">
					{movie.title}
				</h4>
				<div className="flex items-center">
					<Star className="text-yellow-500 mr-1" />
					<span className="text-white font-semibold">{movie.rating}</span>
				</div>
			</CardHeader>
			<Image
				removeWrapper
				alt="Card example background"
				className="z-0 w-full h-full object-cover"
				src={movie.poster}
			/>
			<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
			<div className="absolute flex transition-all translate-y-[140%] group-hover:translate-y-0 bottom-2 left-[50%] translate-x-[-50%]  z-10 ">
				<Button
					onClick={handleRemoveFromWatchList}
					className="flex items-center text-tiny"
					color="danger"
					radius="full"
					size="sm"
				>
					<span className="flex justify-center items-center">Remove</span>
					<LuDelete />
				</Button>
			</div>
		</Card>
	);
};

export default WatchlistCard;
