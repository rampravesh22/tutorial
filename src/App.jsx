import Nav from "./components/Nav";
import SideBar from "./components/SideBar";

function App() {
	const sideShow = () => {
		hideSide();
	};
	const hideSide = () => {};
	return (
		<>
			<div className="">
				<Nav></Nav>
				<SideBar></SideBar>
			</div>
		</>
	);
}

export default App;
