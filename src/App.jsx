function App() {
	const arr = [1, 2, 2, 3, 4, 45, 5, 66, 7, 74, 44, 4, 4];
	return (
		<>
			<div className="flex justify-center items-center h-screen">
				<div className="container flex w-3/4 h-[90vh] bg-slate-500">
					<div className="item  bg-blue-700 h-28 w-52 order-5">1</div>
					<div className="item  bg-red-700 h-28 w-52 order-2">2</div>
					<div className="item  bg-green-700 h-28 w-52">3</div>
					<div className="item  bg-yellow-700 h-28 w-52">4</div>
					<div className="item  bg-orange-700 h-28 w-52">5</div>
					<div className="item  bg-purple-700 h-28 w-52">6</div>
					<div className="item  bg-emerald-700 h-28 w-52">7</div>
					<div className="item  bg-cyan-700 h-28 w-52">8</div>
				</div>
			</div>
		</>
	);
}

export default App;
