import api from "../../utils/api";

export const login = (credentials) => async (dispatch) => {
	try {
		const response = await api.post("/login", credentials);
		dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
	} catch (error) {
		dispatch({ type: "LOGIN_FAILURE", payload: error.message });
	}
};

export const logout = () => ({ type: "LOGOUT" });
