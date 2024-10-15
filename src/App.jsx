import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CreateIncident from "./pages/CreateIncident";
import ViewIncidents from "./pages/ViewIncidents";
import Feedback from "./pages/Feedback";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Home />}></Route>
					<Route
						path="login"
						element={
							<PublicRoute>
								<Login />
							</PublicRoute>
						}
					></Route>
					<Route
						path="register"
						element={
							<PublicRoute>
								<Register />
							</PublicRoute>
						}
					></Route>
					<Route
						path="dashboard"
						element={
							<PrivateRoute>
								<Dashboard />
							</PrivateRoute>
						}
					></Route>
					<Route
						path="create-incident"
						element={
							<PrivateRoute>
								<CreateIncident />
							</PrivateRoute>
						}
					></Route>
					<Route
						path="view-incidents"
						element={
							<PrivateRoute>
								<ViewIncidents />
							</PrivateRoute>
						}
					/>
					<Route path="feedback" element={<Feedback />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
