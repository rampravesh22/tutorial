import api from "../../utils/api";

export const searchMovies = (query) => async (dispatch) => {
	dispatch({ type: "FETCH_MOVIES_REQUEST" });
	try {
		const response = await api.get(`/movies?q=${query}`);

		dispatch({ type: "FETCH_MOVIES_SUCCESS", payload: response.data });
	} catch (error) {
		dispatch({ type: "FETCH_MOVIES_FAILURE", payload: error.message });
	}
};

export const selectMovie = (movie) => ({
	type: "SELECT_MOVIE",
	payload: movie,
});
