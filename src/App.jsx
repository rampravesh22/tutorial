import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaStarOfLife } from "react-icons/fa";
import { LuDivide } from "react-icons/lu";
function App() {
	const [input1, setInput1] = useState("");
	const [input2, setInput2] = useState("");
	const [result, setResult] = useState(0);
	const [currentOperator, setCurrentOperator] = useState("+");
	const handleCalculateBtn = (e) => {
		console.log(e.target.value);
		const value1 = +input1;
		const value2 = +input2;
		switch (e.target.value) {
			case "+":
				setResult((preState) => preState + value1 + value2);
				return;
			case "-":
				setResult(value1 - value2);
				return;
			case "*":
				setResult(value1 * value2);
				return;
			case "/":
				if (value2 === 0) {
					setResult("You can't divide a number by 0");
				} else {
					setResult((value1 / value2).toFixed(3));
				}
		}
	};
	const handleReset = () => {
		setInput1("");
		setInput2("");
		setCurrentOperator("+");
	};

	return (
		<div className="h-screen flex justify-center items-center flex-col">
			<div className="inputs flex items-center gap-5">
				<input
					type="text"
					name="input1"
					value={input1}
					placeholder="input1"
					className="border w-24 h-12 text-2xl px-2 rounded-md border-slate-500"
					onChange={(e) => setInput1(e.target.value)}
				/>
				<span className="text-5xl w-12   px-4 h-12 flex justify-center items-center rounded">
					{currentOperator}
				</span>
				<input
					type="text"
					value={input2}
					name="input2"
					className="border flex justify-center w-24 h-12 text-2xl px-2 rounded-md border-slate-500"
					placeholder="input2"
					onChange={(e) => setInput2(e.target.value)}
				/>
			</div>
			<div className="btns flex gap-8 mt-12">
				<button
					onClick={() => setCurrentOperator("+")}
					className="bg-blue-700 px-4 pt-2 pb-3 text-5xl text-white rounded-md flex justify-center items-center"
				>
					<AiOutlinePlus />
				</button>
				<button
					onClick={() => setCurrentOperator("-")}
					className="bg-yellow-500 px-4 pt-2 pb-3 text-5xl text-white rounded-md flex justify-center items-center"
				>
					<AiOutlineMinus />
				</button>

				<button
					onClick={() => setCurrentOperator("*")}
					className="bg-green-700 px-7 pt-2 pb-3 text-xl text-white rounded-md flex justify-center items-center"
				>
					<FaStarOfLife />
				</button>

				<button
					onClick={() => setCurrentOperator("/")}
					className="bg-red-700 px-7 pt-2 pb-3 text-3xl  text-white rounded-md flex justify-center items-center"
				>
					<LuDivide />
				</button>
			</div>
			<div className="flex  mt-12 gap-12 px-4">
				<button
					onClick={handleReset}
					className="border-2 hover:bg-slate-800 hover:text-white border-slate-900 px-9 rounded-md py-2"
				>
					Reset
				</button>
				<button
					className="bg-slate-900 py-4 px-9 text-white rounded-md text-2xl"
					onClick={handleCalculateBtn}
					value={currentOperator}
				>
					Calculate
				</button>
				<div className="result w-32 flex justify-center items-center rounded-md border-slate-600 border px-9 text-3xl ">
					{result ? result : "Result"}
				</div>
			</div>
		</div>
	);
}

export default App;
