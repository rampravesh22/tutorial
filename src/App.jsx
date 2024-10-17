import React, { useEffect, useState } from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MovieSearch from "./components/MovieSearch";
import MovieDetails from "./components/MovieDetails";
import Watchlist from "./pages/WatchList";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Register from "./pages/Register";
import Home from "./pages/Home";

const PrivateRoute = ({ isAuthenticated, children }) => {
	return isAuthenticated ? children : <Navigate to="/login" />;
};

const PublicRoute = ({ isAuthenticated, children }) => {
	return !isAuthenticated ? children : <Navigate to="/" />;
};

const App = () => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const [loading, setLoading] = useState(true); // New loading state
	const dispatch = useDispatch();

	useEffect(() => {
		const token = localStorage.getItem("token");
		const user = JSON.parse(localStorage.getItem("user"));

		if (token && user) {
			dispatch({ type: "LOGIN_SUCCESS", payload: { user, token } });
		}
		setLoading(false);
	}, [dispatch]);

	if (loading) {
		return (
			<div className="flex justify-center items-center mt-20">
				<div className="size-10 rounded-full animate-spin border-e-blue-600 border-2"></div>
			</div>
		);
	}

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route
						path="login"
						element={
							<PublicRoute isAuthenticated={isAuthenticated}>
								<Login />
							</PublicRoute>
						}
					/>
					<Route path="/" element={<Home />} />
					<Route
						path="search"
						element={
							<PrivateRoute isAuthenticated={isAuthenticated}>
								<MovieSearch />
							</PrivateRoute>
						}
					/>
					<Route
						path="movie/:id"
						element={
							<PrivateRoute isAuthenticated={isAuthenticated}>
								<MovieDetails />
							</PrivateRoute>
						}
					/>
					<Route
						path="register"
						element={
							<PublicRoute isAuthenticated={isAuthenticated}>
								<Register />
							</PublicRoute>
						}
					></Route>
					<Route
						path="watchlist"
						element={
							<PrivateRoute isAuthenticated={isAuthenticated}>
								<Watchlist />
							</PrivateRoute>
						}
					/>
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
