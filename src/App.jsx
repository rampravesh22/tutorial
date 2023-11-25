import { useState } from "react";

function App() {
	const [toggle, setToggle] = useState(false);
	return (
		<div
			style={{
				position: "relative",
				height: "100vh",
				border: "3px solid red",
			}}
		>
			<button
				style={{
					position: "absolute",
					backgroundColor: "red",
					right: ".1rem",
					padding: ".3rem 1rem",
					textAlign: "center",
					width: "10rem",
					borderRadius: ".5rem",
					fontSize: "2rem",
					fontFamily: "fantasy",
					color: "white",
					textTransform: "uppercase",
					letterSpacing: ".1rem",
				}}
				onClick={() => setToggle(!toggle)}
			>
				Toggle
			</button>
			<div
				className="sidebar"
				style={{ height: "90%", background: "black", width: "40%" }}
			></div>
		</div>
	);
}

export default App;
