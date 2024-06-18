function App() {
	return (
		<div className="h-[100svh] flex justify-center items-center">
			<div className="parent relative z-10 size-[400px]   bg-blue-800">
				<div className="absolute  child -z-20 bg-black size-[200px]"></div>
			</div>
		</div>
	);
}

export default App;
