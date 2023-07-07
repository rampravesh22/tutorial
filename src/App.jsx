import axios from "axios";
import { useEffect, useState } from "react";
import Quote from "./Quote";

function App() {
	const [quote, setQuote] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getData = async () => {
			try {
				const res = await axios.get("https://api.quotable.io/random");
				setQuote(res.data);
				setLoading(false);
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
				<h1>Loading..</h1>
			) : (
				<Quote author={quote.author} content={quote.content} />
			)}
		</div>
	);
}

export default App;
