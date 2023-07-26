// MarkdownEditor.js
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";

const MarkdownEditor = () => {
	const [markdown, setMarkdown] = useState("# Write your Markdown here");

	const handleInputChange = (event) => {
		setMarkdown(event.target.value);
	};

	return (
		<div className="container">
			<div className="editor">
				<h1 className="">Markdown Editor</h1>
				<textarea
					rows="10"
					value={markdown}
					onChange={handleInputChange}
					className="border p-2 mb-2 w-[90%] bg-sky-950 text-white"
				/>
			</div>
			<div className="markdown-preview">
				<h1 className="">Markdown Preview</h1>
				<ReactMarkdown remarkPlugins={[remarkGfm]}>
					{markdown}
				</ReactMarkdown>
			</div>
		</div>
	);
};

export default MarkdownEditor;
