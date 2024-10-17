import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieSearch from "../components/MovieSearch";
import { useDispatch, useSelector } from "react-redux";
import { movieData } from "../actions/movieDataActions";

const Home = () => {
	const movies = useSelector((state) => state.moviesData.movies);
	const dispatch = useDispatch();
	const [visibleMovies, setVisibleMovies] = useState(8); // Set initial movies to display

	useEffect(() => {
		dispatch(movieData());
	}, [dispatch]);

	const handleLoadMore = () => {
		setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 8); // Increase visible movies by 12
	};

	return (
		<div>
			<MovieSearch />
			<div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 p-10">
				{movies.slice(0, visibleMovies).map((movie, index) => (
					<MovieCard key={index} movie={movie} />
				))}
			</div>
			{visibleMovies < movies.length && (
				<div className="flex justify-center mt-5 mb-8">
					<button
						onClick={handleLoadMore}
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
					>
						Load More
					</button>
				</div>
			)}
		</div>
	);
};

export default Home;
