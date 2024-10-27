import axios from "axios";
import { BASE_URL } from "../../utils/api";

export const fetchAllTodo = () => async (dispatch, getState) => {
	const { token } = getState().auth;
	try {
		const { data } = await axios.get(`${BASE_URL}/todo/get-all`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};
