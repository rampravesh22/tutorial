import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";
import { useState } from "react";

const unsubscribe = store.subscribe(() => {
	console.log("store changed", store.getState());
});

console.table(store.getState());

function App() {
	const [bugDescription, setBugDescription] = useState("");
	const bugs = store.getState();
	console.table(bugs);
	return (
		<div>
			<div className="bug-add">
				<input
					type="text"
					value={bugDescription}
					onChange={(e) => setBugDescription(e.target.value)}
				/>
				<button onClick={() => store.dispatch(bugAdded(bugDescription))}>
					Add Bug
				</button>
			</div>
			<div>
				{bugs.map((bug) => (
					<div key={bug.id} style={{ display: "flex", gap: "1rem" }}>
						{bug.description}
						<button onClick={() => store.dispatch(bugRemoved(bug.id))}>
							Delete
						</button>
						<button>Resolved</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
