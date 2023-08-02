import React, { useState, useEffect } from "react";
import "./App.css";
const AnalogClock = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date());
		}, 1000);

		// Cleanup the interval when the component unmounts
		return () => clearInterval(intervalId);
	}, []);

	const getRotationStyle = (handValue, totalDegrees) => {
		console.log(handValue);
		const degrees = (handValue / totalDegrees) * 360 - 90;
		return {
			transform: `rotate(${degrees}deg)`,
		};
	};

	const secondsRotation = getRotationStyle(time.getSeconds(), 60);

	return (
		<div className="analog-clock">
			<div className="hand seconds-hand" style={secondsRotation}></div>
		</div>
	);
};

export default AnalogClock;
