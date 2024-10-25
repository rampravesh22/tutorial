import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

const PrivatRoute = ({ isAuthenticated, children }) => {
	return isAuthenticated ? children : <Login />;
};

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="register" element={<Register />} />
					<Route path="login" element={<Login />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
