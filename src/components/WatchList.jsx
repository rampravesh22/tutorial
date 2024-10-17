import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "../components/MovieCard";
import { removeFromWatchlist } from "../redux/actions/watchlistActions";

const Watchlist = () => {
	const watchlist = useSelector((state) => state.watchlist.watchlist);
	const dispatch = useDispatch();

	return (
		<div>
			<div>My Watchlist</div>
			<div>
				{watchlist.map((movie) => (
					<div key={movie.id}>
						<MovieCard
							movie={movie}
							onSelect={() => {}}
							onAddToWatchlist={() => dispatch(removeFromWatchlist(movie.id))}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Watchlist;
