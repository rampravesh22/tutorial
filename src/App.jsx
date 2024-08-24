import * as React from "react";

import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import Header from "./pages/header/Header";
import Profile from "./pages/profile/Profile";

const App = () => {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path="/dashboard" element={<Dashboard />}></Route>
				<Route path="/profile" element={<Profile />}></Route>
			</Routes>
		</div>
	);
};

export default App;
