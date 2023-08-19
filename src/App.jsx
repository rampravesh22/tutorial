function App() {
	return (
		<>
			<div className="flex justify-evenly items-center h-screen gap-3 bg-slate-800">
				<button className="btn hover:bg-blue-700 bg-blue-500 ">
					Primary
				</button>
				<button className="btn hover:bg-slate-700 bg-slate-500">
					Secondary
				</button>
				<button className="btn hover:bg-red-700 bg-red-500">
					Danger
				</button>
				<button className="btn hover:bg-green-700 bg-green-500">
					Success
				</button>
			</div>
		</>
	);
}

export default App;
