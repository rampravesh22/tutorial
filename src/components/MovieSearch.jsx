import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button } from "@nextui-org/react";
import MovieCard from "../components/MovieCard";
import { addToWatchlist } from "../redux/actions/watchlistActions";
import { searchMovies } from "../redux/actions/movieActions";

const MovieSearch = () => {
	const [query, setQuery] = useState("");
	const dispatch = useDispatch();
	const { movies, loading, error } = useSelector((state) => state.movies);

	const handleSearch = () => {
		dispatch(searchMovies(query));
	};

	return (
		<div>
			<Input
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="Search movies..."
			/>
			<Button auto onClick={handleSearch}>
				Search
			</Button>
			{loading && <div>Loading</div>}
			{error && <div color="error">Error: {error}</div>}
			<div className="grid grid-cols-3">
				{movies.map((movie) => (
					<div key={movie.id}>
						<MovieCard
							movie={movie}
							onSelect={() =>
								dispatch({ type: "SELECT_MOVIE", payload: movie })
							}
							onAddToWatchlist={() => dispatch(addToWatchlist(movie))}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default MovieSearch;
