// src/utils/api.js
import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:5000", // Replace with your actual API base URL
});

// api.interceptors.request.use(
// 	(config) => {
// 		const token = localStorage.getItem("token");
// 		if (token) {
// 			config.headers.Authorization = `Bearer ${token}`;
// 		}
// 		return config;
// 	},
// 	(error) => Promise.reject(error)
// );

export default api;
