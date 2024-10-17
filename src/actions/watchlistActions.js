import api from "../utils/api";

export const addToWatchlist = (movie) => async (dispatch, getState) => {
	const { auth } = getState();
	try {
		await api.post("/watchlist", { userId: auth.user.id, movieId: movie.id });
		dispatch({ type: "ADD_TO_WATCHLIST", payload: movie });
	} catch (error) {
		console.error("Failed to add to watchlist:", error);
	}
};

export const removeFromWatchlist = (movieId) => async (dispatch, getState) => {
	const { auth } = getState();
	try {
		await api.delete(`/watchlist/${auth.user.id}/${movieId}`);
		dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: movieId });
	} catch (error) {
		console.error("Failed to remove from watchlist:", error);
	}
};
