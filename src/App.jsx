function App() {
	return (
		<div className="body border-4 flex flex-col border-black min-h-screen">
			{/* header */}
			<div className="header h-20 bg-slate-600 text-white text-center text-4xl">
				Header
			</div>

			{/* body */}
			<div className="main-body h-full overflow-y-scroll  flex-grow flex bg-yellow-500 ">
				<div className="sidebar h-full bg-red-600 w-40">sidebar</div>
				<div className="content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-4  p-5 flex-grow border bg-orange-700">
					<div className="size-40 bg-white border-black border"></div>
					<div className="size-40 bg-white border-black border"></div>
					<div className="size-40 bg-white border-black border"></div>
					<div className="size-40 bg-white border-black border"></div>
					<div className="size-40 bg-white border-black border"></div>
					<div className="size-40 bg-white border-black border"></div>
					<div className="size-40 bg-white border-black border"></div>
					<div className="size-40 bg-white border-black border"></div>
					<div className="size-40 bg-white border-black border"></div>
					<div className="size-40 bg-white border-black border"></div>
				</div>
			</div>

			{/* footer */}
			<div className="footer text-center bg-teal-600 h-40 text-white text-4xl">
				Footer
			</div>
		</div>
	);
}

export default App;
