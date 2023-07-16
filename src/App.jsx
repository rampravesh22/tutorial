import Image from "./components/Image";
function App() {
	const arr = [
		800, 801, 802, 802, 885, 885, 775, 885, 883, 774, 888, 888, 783, 853, 885,
		834,
	];
	return (
		<>
			<div className="w-full min-h-screen flex flex-wrap justify-center gap-12 mt-24 transition-all duration-500">
				{arr.map((value, ind) => {
					return <Image key={ind} value={value} />;
				})}
			</div>
		</>
	);
}

export default App;
