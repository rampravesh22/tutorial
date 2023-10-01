import { Provider } from "react-redux";
import store from "./redux/store";
import Bugs from "./components/Bugs";

function App() {
	return (
		<Provider store={store}>
			<Bugs />
		</Provider>
	);
}

export default App;
