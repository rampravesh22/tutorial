import { ChakraProvider } from "@chakra-ui/react";
import Home from "./components/Home";
import Header from "./components/Header";
function App() {
	return (
		<>
			<ChakraProvider>
				<Header />
			</ChakraProvider>
		</>
	);
}

export default App;
