import React, { useEffect, useState } from "react";
import { Card, Skeleton, Button, CardHeader, Image } from "@nextui-org/react";
import { Star } from "lucide-react";
import { LuPlus } from "react-icons/lu";

// Skeleton Loader Component

export function Skeleton1() {
	return (
		<Card
			className="h-[350px] space-y-5 max-w-[300px] w-full p-4 relative"
			radius="lg"
		>
			<Skeleton className="rounded-lg">
				<div className="h-24 rounded-lg bg-default-300"></div>
			</Skeleton>
			<div className="space-y-3">
				<Skeleton className="w-4/5 rounded-lg h-5" />
				<Skeleton className="w-3/5 rounded-lg h-4" />
				<Skeleton className="w-2/5 rounded-lg h-4" />
			</div>
			<div className="absolute inset-0 " />
			<div className="absolute bottom-0 left-0 right-0 p-4">
				<Skeleton className="rounded-lg h-8 w-1/2 " />
			</div>
		</Card>
	);
}

const MovieCard = ({ movie }) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1200);
		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <Skeleton1 />;
	}

	const handleAddToWatchList = () => {};

	return (
		<Card
			isFooterBlurred
			className="relative h-[350px] max-w-[300px] w-full transition-transform duration-300 transform hover:scale-105"
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
			<div className="absolute flex  bottom-2 right-1  z-10 ">
				<Button
					className="flex items-center text-tiny"
					color="secondary"
					radius="full"
					size="sm"
				>
					<span className="flex justify-center items-center">
						Add to Watchlist
					</span>
					<LuPlus />
				</Button>
			</div>
		</Card>
	);
};

export default MovieCard;
