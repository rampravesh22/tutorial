import { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

function App() {
	const [leftData, setLeftData] = useState([
		{
			name: "one",
			checked: false,
		},
		{
			name: "two",
			checked: false,
		},
		{
			name: "three",
			checked: false,
		},
		{
			name: "four",
			checked: false,
		},
		{
			name: "five",
			checked: false,
		},
		{
			name: "six",
			checked: false,
		},
		{
			name: "seven",
			checked: false,
		},
		{
			name: "eight",
			checked: false,
		},
	]);
	const [rightData, setRightData] = useState([
		{
			name: "nine",
			checked: false,
		},
		{
			name: "ten",
			checked: false,
		},
	]);

	const [checkedData, setCheckedData] = useState([]);
	console.log(checkedData);
	const handleInputChange = (e, side) => {
		const { name, checked } = e.target;
		setCheckedData((prevState) => [
			...prevState,
			{ name: name, checked: false },
		]);

		if (side === "left") {
			setLeftData((prevState) =>
				prevState.map((item) =>
					item.name === name ? { ...item, checked } : item
				)
			);
		} else {
			setRightData((prevState) =>
				prevState.map((item) =>
					item.name === name ? { ...item, checked } : item
				)
			);
		}
	};
	const handleClickMoveRight = () => {
		setRightData((presState) => {
			return [...presState, ...checkedData];
		});
		setLeftData((preState) => {
			return preState.filter((data) => {
				if (data.checked === false) {
					return data;
				}
			});
		});
		setCheckedData([]);
	};

	const handleClickMoveLeft = () => {
		setLeftData((presState) => {
			return [...presState, ...checkedData];
		});
		setRightData((presState) => {
			return presState.filter((data) => {
				if (data.checked === false) {
					return data;
				}
			});
		});
		setCheckedData([]);
	};
	return (
		<>
			<div className="h-screen flex justify-evenly gap-16 items-center p-5">
				<div className="left border w-[30%] flex flex-col p-10 text-xl min-h-[350px] ">
					{leftData.map((data, index) => (
						<div className="input flex gap-2" key={index}>
							<input
								type="checkbox"
								onChange={(e) => handleInputChange(e, "left")}
								className="accent-pink-600 w-5 rounded-lg"
								placeholder="eigth"
								id={data.name}
								name={data.name}
								value={data.checked}
								checked={data.checked}
							/>
							<label htmlFor={data.name}>{data.name}</label>
						</div>
					))}
				</div>
				<div className="btns  border w-[10%] h-80 flex flex-col text-3xl justify-center items-center gap-10">
					<button onClick={handleClickMoveRight}>
						<AiOutlineArrowRight className="bg-pink-600 transition-all hover:bg-pink-700 text-white p-2 text-5xl rounded-md" />
					</button>
					<button onClick={handleClickMoveLeft}>
						<AiOutlineArrowLeft className="bg-gray-600 transition-all hover:bg-gray-700 text-white p-2 text-5xl rounded-md" />
					</button>
				</div>
				<div className="right w-[30%] border min-h-[350px] flex flex-col p-10 text-xl">
					{rightData.map((data, index) => (
						<div className="input flex gap-2" key={index}>
							<input
								type="checkbox"
								onChange={(e) => handleInputChange(e, "right")}
								className="accent-pink-600 w-5 rounded-lg"
								placeholder="eigth"
								id={data.name}
								name={data.name}
								value={data.checked}
								checked={data.checked}
							/>
							<label htmlFor={data.name}>{data.name}</label>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default App;
