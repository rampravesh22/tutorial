import { useState } from "react";
import "./app.css";
import data from "./data";
function App() {
	const [angle, setAngle] = useState(0);

	const handleRotate = () => {
		setAngle((preState) => preState + 30);
	};

	const handleScaleInc = () => {
		setAngle((preState) => preState + 30);
	};
	const handleScaleDec = () => {
		setAngle((preState) => preState + 30);
	};
	return (
		<>
			<div className="btns">
				<button onClick={handleRotate}>Rotate (90deg)</button>
				<div className="scale">
					<button onClick={handleScaleInc}>Scale(0.1)</button>
					<button onClick={handleScaleDec}>Scale(-0.1)</button>
				</div>
			</div>
			<div className="container">
				<div
					className="box-1 box"
					style={{
						rotate: `${angle}deg`,
					}}
				>
					Rotated - <span>[{`${angle}deg`}]</span>
				</div>
			</div>
		</>
	);
}

export default App;
