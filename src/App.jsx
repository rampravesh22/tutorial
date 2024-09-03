import { Route, Routes } from "react-router-dom";
import ResumeContainer from "./components/ResumeContainer";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Layout from "./components/layout/Layout";
import ProtectedRoutes from "./components/redirect-routes/ProtectedRoute";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import { useEffect } from "react";
import RedirectIfAuthenticated from "./components/redirect-routes/RedirectIfAuthenticated";
import { Toaster } from "react-hot-toast";
import CreateResume from "./pages/create-resume/CreateResume";

function App() {
	return (
		<div>
			<Toaster />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Home />}></Route>
					<Route
						path="/resume"
						element={
							<ProtectedRoutes>
								<ResumeContainer />
							</ProtectedRoutes>
						}
					></Route>
					<Route
						path="/create-resume"
						element={
							<ProtectedRoutes>
								<CreateResume />
							</ProtectedRoutes>
						}
					></Route>
					<Route
						path="/login"
						element={
							<RedirectIfAuthenticated>
								<Login />
							</RedirectIfAuthenticated>
						}
					></Route>
					<Route
						path="/register"
						element={
							<RedirectIfAuthenticated>
								<Signup />
							</RedirectIfAuthenticated>
						}
					></Route>
					<Route
						path="/dashboard"
						element={
							<ProtectedRoutes>
								<Dashboard />
							</ProtectedRoutes>
						}
					></Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
