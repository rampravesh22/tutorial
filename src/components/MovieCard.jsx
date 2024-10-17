import React, { useEffect, useState } from "react";
import {
	Card,
	Skeleton,
	Button,
	CardHeader,
	Image,
	Link,
} from "@nextui-org/react";
import { Star } from "lucide-react";
import { LuArrowBigRight, LuArrowRight, LuPlus } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist } from "../actions/watchlistActions";
import { Link as Rlink, useNavigate } from "react-router-dom";

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
	const navigate = useNavigate();
	// const auth = useSelector((state) => state.auth);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 200);
		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <Skeleton1 />;
	}

	return (
		<Card
			isFooterBlurred
			className="relative h-[350px] overflow-hidden group max-w-[300px] w-full transition-transform duration-300 transform hover:scale-105"
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
			<div className="absolute transition-all flex  bottom-5 left-[50%] translate-x-[-50%]  z-10 group-hover:translate-y-0 translate-y-[200px] ">
				<Button
					onClick={() => navigate(`/movie/${movie.id}`)}
					color="secondary"
					radius="full"
				>
					<span className="flex justify-center items-center">View Details</span>
					<LuArrowRight />
				</Button>
			</div>
		</Card>
	);
};

export default MovieCard;
