import Signin from "./Signin";
import Signup from "./Signup";

function App() {
	return (
		<div className="flex flex-col gap-12 ">
			<Signup />
			<Signin />
		</div>
	);
}

export default App;
