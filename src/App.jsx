import React, { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Loader from "./Loader";

function App() {
	const [text, setText] = useState("");
	const [value, setValue] = useState("");
	const [loading, setLoading] = useState(false);
	const [copySuccess, setCopySuccess] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			setLoading(true);
			const res = await fetch(
				`http://localhost:3000/gemini/?query=${encodeURIComponent(text)}`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (!res.ok) {
				throw new Error(`HTTP error! status: ${res.status}`);
			}

			const data = await res.json();
			setValue(data.message); // Assume data.message contains Markdown content
		} catch (error) {
			console.error("Error fetching data:", error);
		} finally {
			setLoading(false);
			setText("");
		}
	};

	// Function to copy the code snippet
	const handleCopy = (code) => {
		navigator.clipboard.writeText(code).then(() => {
			setCopySuccess("Copied!");
			setTimeout(() => setCopySuccess(""), 2000); // Reset copy success after 2 seconds
		});
	};

	return (
		<div className="relative min-h-screen font-poppins">
			<h1 className="text-center bg-zinc-900 w-[92%] rounded-full mt-3 max-w-4xl mx-auto text-white py-3">
				GeptGPT
			</h1>
			<div className="max-w-4xl mx-auto mt-5 mb-32">
				<div className="m-5 p-4 border-slate-300 rounded-md border shadow-md">
					{value ? (
						<Markdown
							remarkPlugins={[remarkGfm]}
							components={{
								code({ node, inline, className, children, ...props }) {
									const match = /language-(\w+)/.exec(className || "");
									const code = String(children).replace(/\n$/, "");

									return !inline && match ? (
										<div className="relative">
											<SyntaxHighlighter
												style={dark}
												language={match[1]}
												PreTag="div"
												{...props}
											>
												{code}
											</SyntaxHighlighter>
											<button
												onClick={() => handleCopy(code)}
												className="absolute top-2 right-2 px-2 py-1 bg-gray-700 text-white rounded text-sm"
											>
												Copy
											</button>
										</div>
									) : (
										<code className={className} {...props}>
											{children}
										</code>
									);
								},
							}}
						>
							{value}
						</Markdown>
					) : (
						<div className="text-center">Please search anything you want.</div>
					)}
				</div>
				{copySuccess && (
					<div className="text-center text-green-500 mt-2">{copySuccess}</div>
				)}
			</div>
			<form
				onSubmit={handleSubmit}
				className="fixed bottom-0 max-w-[52rem] mx-auto left-[50%] translate-x-[-50%] flex w-[95%] items-center justify-center p-4 bg-transparent"
			>
				<input
					className="border-slate-500 flex items-center min-h-12 w-full shadow-lg px-6 outline-none font-light text-lg rounded-full border resize-none overflow-hidden"
					value={text}
					onChange={(e) => setText(e.target.value)}
					rows={1}
					placeholder="Search your message..."
				/>

				<button type="submit" className="ml-4 absolute right-7">
					{loading ? (
						<Loader className="size-6" />
					) : (
						<BsFillArrowRightCircleFill className="text-3xl" />
					)}
				</button>
			</form>
		</div>
	);
}

export default App;
