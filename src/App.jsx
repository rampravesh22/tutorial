import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
function App() {
	return (
		<Provider store={store}>
			<CakeContainer />
		</Provider>
	);
}

export default App;
