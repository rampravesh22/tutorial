import axios from "axios";
import { useEffect, useState } from "react";
import Quate from "./Quate";

function App() {
	const [quote, setQuote] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getData = async () => {
			try {
				const res = await axios.get("https://api.quotable.io/random");
				setLoading(false);
				setQuote(res.data);
				console.log(res.data);
			} catch (error) {
				// Handle error
				console.log(error);
			}
		};

		if (Object.keys(quote).length === 0) {
			getData();
		}
	}, []); // Empty dependency array

	return (
		<div className="min-h-[100vh] flex justify-center items-center">
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<Quate author={quote.author} content={quote.content}></Quate>
			)}
		</div>
	);
}

export default App;
