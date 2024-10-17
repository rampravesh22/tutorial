import React, { useEffect } from "react";
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

const App = () => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	const dispatch = useDispatch();

	useEffect(() => {
		const token = localStorage.getItem("token");
		const user = JSON.parse(localStorage.getItem("user"));

		if (token && user) {
			dispatch({ type: "LOGIN_SUCCESS", payload: { user, token } });
		}
	}, [dispatch]);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="login" element={<Login />} />
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
					<Route path="register" element={<Register />}></Route>
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

const PrivateRoute = ({ isAuthenticated, children }) => {
	return isAuthenticated ? children : <Navigate to="/login" />;
};

export default App;
