import axios from "axios";
const axiosCreate = axios.create({
	baseURL: "https://api.rawg.io/api",
});

export default axiosCreate;
