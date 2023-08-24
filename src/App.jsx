function App() {
	return (
		<>
			<div className="flex bg-slate-500 h-screen flex-col">
				<header className="h-14 bg-white w-full flex justify-between items-center px-3 md:px-10">
					<div className="logo text-3xl font-extrabold text-slate-800">
						Tino
					</div>
					<nav>
						<ul className="flex md:gap-8 gap-2">
							<li>Home</li>
							<li>Contact</li>
							<li>About</li>
							<li>Sign-Up</li>
							<li>Login</li>
						</ul>
					</nav>
				</header>
				<main className="flex-grow flex">
					<div className="sidbar bg-red-600 hidden md:block md:w-[30%] h-full"></div>
					<div className="content bg-blue-700 w-full md:w-[70%] h-full"></div>
				</main>
				<footer className="w-full h-28 bg-green-700"></footer>
			</div>
		</>
	);
}

export default App;
