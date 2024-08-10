import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import { useContext } from "react";
import { GlobalContext } from "./ContextProvider";
function App() {
	const { session } = useContext(GlobalContext);
	return (
		<div className="flex flex-col gap-12 ">
			<Routes>
				<Route
					path="/"
					element={!session ? <Auth /> : <Navigate to={"/dashboard"} replace />}
				></Route>
				<Route
					path="/dashboard"
					element={session ? <Dashboard /> : <Navigate to={"/"} replace />}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
