import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { LOGIN } from "./redux/action-types/authActionTypes";
import AddTodo from "./pages/AddTodo";

const PrivateRoute = ({ isAuthenticated, children }) => {
	return isAuthenticated ? children : <Navigate to="/login" />;
};

const PublicRoute = ({ isAuthenticated, children }) => {
	return !isAuthenticated ? children : <Navigate to="/" />;
};

function App() {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const token = localStorage.getItem("token");
		const user = JSON.parse(localStorage.getItem("user"));
		if (token && user) {
			dispatch({ type: LOGIN, payload: { user, token } });
		}
		setLoading(false);
	}, [dispatch]);

	if (loading) {
		return null;
	}
	return (
		<>
			<Toaster />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route
							index
							element={
								<PrivateRoute isAuthenticated={isAuthenticated}>
									<Home />
								</PrivateRoute>
							}
						/>
						<Route
							path="addtodo"
							element={
								<PrivateRoute isAuthenticated={isAuthenticated}>
									<AddTodo />
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
						/>
						<Route
							path="login"
							element={
								<PublicRoute isAuthenticated={isAuthenticated}>
									<Login />
								</PublicRoute>
							}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
