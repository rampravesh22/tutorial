import React, { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import MovieSearch from "../components/MovieSearch";
import { useDispatch, useSelector } from "react-redux";
import { movieData } from "../actions/movieDataActions";

const Home = () => {
	const movies = useSelector((state) => state.moviesData.movies);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(movieData());
	}, []);
	return (
		<div>
			<MovieSearch />
			<div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 p-10">
				{movies.map((movie, index) => {
					return <MovieCard key={index} movie={movie} />;
				})}
			</div>
		</div>
	);
};

export default Home;
