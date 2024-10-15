import { Navigate } from "react-router-dom";

const isAthenticated = () => {
	return localStorage.getItem("token") !== "";
};

const PublicRoute = ({ children }) => {
	return isAthenticated() ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute;
