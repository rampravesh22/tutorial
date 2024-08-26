import { Route, Routes } from "react-router-dom";
import ResumeContainer from "./components/ResumeContainer";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Layout from "./components/layout/Layout";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/resume" element={<ResumeContainer />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/register" element={<Signup />}></Route>
					<Route path="/admin"></Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
