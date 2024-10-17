import api from "../utils/api";

export const movieData = () => async (dispatch) => {
	try {
		const response = await api.get(`/movies`);
		dispatch({ type: "FETCH_MOVIES_SUCCESS", payload: response.data });
	} catch (error) {
		dispatch({ type: "FETCH_MOVIES_FAILURE", payload: error.message });
	}
};
