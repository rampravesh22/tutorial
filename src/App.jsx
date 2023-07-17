import { useReducer } from "react";
const initialState = {
	count: 0,
};

const ACTIONS = {
	INCREMENT: "increment",
	DECREMENT: "decrement",
	RESET: "reset",
};

const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.INCREMENT:
			return { count: state.count + 1 };
		case ACTIONS.DECREMENT:
			return { count: state.count - 1 };
		case ACTIONS.RESET:
			return { count: 0 };

		default:
			return state;
	}
};

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<>
			<div className="w-1/2 m-auto mt-80">
				<button
					className=" border-black border-2 px-6 rounded hover:bg-blue-700 bg-blue-600 text-white py-2"
					onClick={() => {
						dispatch({ type: ACTIONS.INCREMENT });
					}}
				>
					Increament
				</button>
				<div className="ml-14 text-3xl">{state.count}</div>
				<button
					className=" border-black border-2 px-6 rounded hover:bg-blue-700 bg-blue-600 text-white py-2"
					onClick={() => {
						dispatch({ type: ACTIONS.DECREMENT });
					}}
				>
					Decreament
				</button>
				<br />
				<button
					className=" border-black border-2 px-6 rounded hover:bg-red-700 bg-red-600 text-white py-2"
					onClick={() => {
						dispatch({ type: ACTIONS.RESET });
					}}
				>
					Reset
				</button>
			</div>
		</>
	);
}

export default App;
