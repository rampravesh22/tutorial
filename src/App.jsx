import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect } from "react";
import { API_KEY } from "./api";

function App() {
	useEffect(() => {
		const genAI = new GoogleGenerativeAI(API_KEY);
		const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

		const prompt = "Write a story about a magic backpack.";

		model
			.generateContent(prompt)
			.then((res) => {
				console.log(res.response.text);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	return <div>{"hello"}</div>;
}

export default App;
