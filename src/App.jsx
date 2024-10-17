import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import MovieSearch from "./components/MovieSearch";
import MovieDetails from "./components/MovieDetails";
import Watchlist from "./components/WatchList";
import Login from "./components/Login";
import Header from "./components/Header";

const App = () => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	return (
		<Router>
			<Header />
			<div>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route
						path="/search"
						element={
							<PrivateRoute isAuthenticated={isAuthenticated}>
								<MovieSearch />
							</PrivateRoute>
						}
					/>
					<Route
						path="/movie/:id"
						element={
							<PrivateRoute isAuthenticated={isAuthenticated}>
								<MovieDetails />
							</PrivateRoute>
						}
					/>
					<Route
						path="/watchlist"
						element={
							<PrivateRoute isAuthenticated={isAuthenticated}>
								<Watchlist />
							</PrivateRoute>
						}
					/>
					<Route path="/" element={<Navigate to="/search" />} />
				</Routes>
			</div>
		</Router>
	);
};

const PrivateRoute = ({ isAuthenticated, children }) => {
	return isAuthenticated ? children : <Navigate to="/login" />;
};

export default App;
