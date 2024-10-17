import toast from "react-hot-toast";
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

		const toastId = toast.loading("Logging in, please wait.");

		if (response.data.length) {
			const user = response.data[0];
			const token = generateToken();
			setTimeout(() => {
				dispatch({ type: "LOGIN_SUCCESS", payload: { user, token } });
				localStorage.setItem("token", token);
				localStorage.setItem("user", JSON.stringify(user));
				toast.success("Logged in successfully.", { id: toastId });
			}, 1000);
		} else {
			setTimeout(() => {
				dispatch({
					type: "LOGIN_FAILURE",
					payload: "Users does not exist, please register.",
				});
				toast.error("Users does not exist, please register.", {
					id: toastId,
				});
			}, 1000);
		}
	} catch (error) {
		dispatch({ type: "LOGIN_FAILURE", payload: error.message });
	}
};

export const register = (credentials) => async (dispatch) => {
	try {
		const toastId = toast.loading("Registering, please wait.");
		const existingUserResponse = await api.get(
			`/users?email=${credentials.email}`
		);
		if (existingUserResponse.data.length > 0) {
			toast.error("User already exists", { id: toastId });
			dispatch({ type: "REGISTER_FAILURE", payload: "User already exists" });
			return;
		}

		const response = await api.post("/users", credentials);
		dispatch({ type: "REGISTER_SUCCESS", payload: response.data });
		toast.success("Registered successfully.", { id: toastId });
	} catch (error) {
		dispatch({ type: "REGISTER_FAILURE", payload: error.message });
	}
};
export const logout = () => async (dispatch) => {
	dispatch({ type: "LOGOUT" });
};
