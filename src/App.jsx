function App() {
	return (
		<div
			className="h-80 bg-red-700 justify-center items-center flex"
			onClickCapture={() => console.log("grandparent")}
		>
			<div
				className="h-64 bg-white w-[90%] flex justify-center items-center"
				onClickCapture={() => console.log("parent")}
			>
				<div
					className="flex justify-center items-center w-[90%] h-[80%] bg-purple-700"
					onClickCapture={(e) => {
						console.log("chiled");
					}}
				>
					<div
						className="bg-black h-[60%] w-[80%]"
						onClickCapture={(e) => {
							console.log("grandchild");
						}}
					></div>
				</div>
			</div>
		</div>
	);
}

export default App;
