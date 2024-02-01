import Nav from "./Nav";
import AddTodo from "./AddTodo";
import ShowTodo from "./ShowTodo";
import { Outlet } from "react-router-dom";
const Layout = () => {
	return (
		<div className="h-screen flex-col flex">
			<Nav />
			<Outlet />
		</div>
	);
};

export default Layout;
