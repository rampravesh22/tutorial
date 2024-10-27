import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../../utils/api";
import { LOGIN, LOGOUT } from "../action-types/authActionTypes";

export const login = (loginData, navigate) => async (dispatch) => {
	const id = toast.loading("Logging in, wait...");
	try {
		const { data } = await axios.post(`${BASE_URL}/user/login`, loginData);

		if (data.user && data.token) {
			localStorage.setItem("token", data.token);
			localStorage.setItem("user", JSON.stringify(data.user));
			dispatch({
				type: LOGIN,
				payload: { user: data.user, token: data.token },
			});
			navigate("/");
		}

		toast.success(data.message, { id });
	} catch (error) {
		console.log(error);
		toast.error("Something went wrong", { id });
	}
};

export const logout = () => async (dispatch) => {
	localStorage.removeItem("token");
	localStorage.removeItem("user");
	const id = toast.loading("Logging out...");
	setTimeout(() => {
		dispatch({ type: LOGOUT });
		toast.success("Logout successful.", { id });
	}, 500);
};
