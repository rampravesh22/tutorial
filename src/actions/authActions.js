import api from "../utils/api";

const generateToken = () => {
	return Math.random().toString(36).substring(2); // Simple token for demonstration
};
export const login = (credentials) => async (dispatch) => {
	try {
		const response = await api.get("/users", {
			params: {
				...credentials,
			},
		});

		if (response.data.length) {
			const user = response.data[0];
			const token = generateToken();
			dispatch({ type: "LOGIN_SUCCESS", payload: { user, token } });
			localStorage.setItem("token", token);
			localStorage.setItem("user", JSON.stringify(user));
		} else {
			dispatch({
				type: "LOGIN_FAILURE",
				payload: "Users does not exist, please register.",
			});
		}
	} catch (error) {
		dispatch({ type: "LOGIN_FAILURE", payload: error.message });
	}
};
export const register = (credentials) => async (dispatch) => {
	console.log(credentials);
	try {
		const response = await api.post("/users", credentials);
		dispatch({ type: "REGISTER_SUCCESS", payload: response.data });
	} catch (error) {
		dispatch({ type: "REGISTER_FAILURE", payload: error.message });
	}
};

export const logout = () => ({ type: "LOGOUT" });
