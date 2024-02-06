import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="" element={<Home />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/register" element={<Register />}></Route>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
