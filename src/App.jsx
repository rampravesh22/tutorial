function App() {
	return (
		<>
			<div
				className="bg-red-500 w-[400px] h-[400px] flex justify-center items-center"
				onClick={() => {
					console.log("outer");
				}}
			>
				<div
					className="bg-black w-[300px] h-[300px] flex justify-center items-center"
					onClick={() => console.log("inner 1")}
				>
					<div
						className="bg-yellow-500 w-[200px] h-[200px]"
						onClick={() => console.log("inner 2")}
					></div>
				</div>
			</div>
		</>
	);
}

export default App;
