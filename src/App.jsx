import Editor from "./Editor";
import ShowData from "./ShowData";
function App() {
	const getData = (data) => {
		const newData = data;
	};
	return (
		<div className="flex h-screen gap-3 justify-center">
			<Editor getData={getData} />
		</div>
	);
}

export default App;
